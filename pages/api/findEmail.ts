// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import validate from "deep-email-validator";
import { generateEmails } from "@/lib/generateEmails";

type Data = {
	firstName: string;
	lastName: string;
	domain: string;
};

type Response = {
	email: string;
}

const findEmailHandler: NextApiHandler<Response> = async (req, res) => {
	const { firstName, lastName, domain } = req.body as Data;
	if (!(firstName && lastName && domain)) {
		throw new Error("firstName, lastName, and domain are required");
	}

	const emails = generateEmails(
		req.body.firstName,
		req.body.lastName,
		req.body.domain,
	).map((email) => email.toLowerCase());

	const validations = await Promise.all(emails.map((email) => validate({
			email,
    sender: email,
    validateRegex: true,
    validateMx: true,
    validateTypo: false,
    validateDisposable: true,
    validateSMTP: true,
	})));
	const emailIndex = validations.findIndex((a) => a.valid);

	return res.status(200).json({ email: emails[emailIndex]});
};

export default findEmailHandler;
