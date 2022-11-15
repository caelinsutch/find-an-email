import { ReactElement } from "react";

type ButtonProps = {
  isLoading?: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => (
  <button type="button"
    className="flex align-middle justify-center w-full rounded-md border border-transparent dark:bg-gray-800 px-5 py-3 text-base font-medium text-white shadow dark:hover:bg-gray-700 focus:outline-none focus:ring-2 dark:focus:ring-gray-700 focus:ring-offset-2 dark:focus:ring-offset-gray-400 sm:px-10 text-center"
    disabled={isLoading}
    {...props}
  >
    {isLoading ?
      <div className="mx-auto">
        <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path className="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
      </div>
      : children
    }
  </button>
)