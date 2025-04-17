import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 py-4 sm:py-6">
        <Text
          size={{ initial: "1", sm: "2" }}
          color="gray"
          className="text-center sm:text-left"
        >
          Copyright © 2025 Mahesh R. All rights reserved.
        </Text>

        <div className="flex flex-row gap-4">
          <Link
            href="https://github.com/Mahesh5726"
            className="text-foreground/60 hover:text-foreground/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <GitHubLogoIcon className="w-4 h-4" />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mahesh-r-1ba86123a/"
            className="text-foreground/60 hover:text-foreground/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <LinkedInLogoIcon className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
