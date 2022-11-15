export const generateEmails = (
	firstName: string,
	lastName: string,
	domain: string,
) => {
	const emails: string[] = [];
	emails.push(`${firstName}.${lastName}@${domain}`);
	emails.push(`${firstName}${lastName}@${domain}`);
	emails.push(`${firstName}_${lastName}@${domain}`);
	emails.push(`${firstName}-${lastName}@${domain}`);
	emails.push(`${firstName[0]}${lastName}@${domain}`);
	emails.push(`${firstName}${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}.${lastName}@${domain}`);
	emails.push(`${firstName}.${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}_${lastName}@${domain}`);
	emails.push(`${firstName}_${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}-${lastName}@${domain}`);
	emails.push(`${firstName}-${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}.${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}_${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}-${lastName[0]}@${domain}`);
	emails.push(`${firstName}${lastName[0]}.${lastName}@${domain}`);
	emails.push(`${firstName[0]}${lastName}.${lastName}@${domain}`);
	emails.push(`${firstName}${lastName[0]}${lastName}@${domain}`);
	emails.push(`${firstName[0]}${lastName[0]}${lastName}@${domain}`);
	emails.push(`${firstName}${lastName}.${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}${lastName}.${lastName[0]}@${domain}`);
	emails.push(`${firstName}${lastName[0]}${lastName[0]}@${domain}`);
	emails.push(`${firstName}@${domain}`);
	emails.push(`${lastName}@${domain}`);
	emails.push(`${firstName[0]}@${domain}`);
	emails.push(`${lastName[0]}@${domain}`);
	emails.push(`${firstName[0]}${lastName[0]}@${domain}`);
	return emails;
};
