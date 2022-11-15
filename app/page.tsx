import { FindEmail, findEmailSchema } from "@/lib/schemas";
import { FormInput } from "components/atoms/FormInput";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "components/atoms/Button";
import { EmailFindingForm } from "components/EmailFindingForm";

const Home: NextPage = () => {

  return (
    <div className="h-screen bg-white dark:bg-gray-900 flex align-middle justify-center w-screen">
      <div className=" sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl h-80 mt-[20vh] bg-gray-50 dark:bg-gray-800" />
          <svg
            className="absolute top-[20vh] left-1/2 -ml-3"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-slate-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-slate-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center mb-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Superspeed Email Search 🚀
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
                  Find anyones email address with just their first name, last name, and a company domain.
                </p>
              </div>
              <EmailFindingForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
