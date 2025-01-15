import { getServerSession } from "next-auth/next";
import { options } from "../app/api/auth/[...nextauth]/route";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import NextAuthSessionProvider from "@/components/NextAuthSessionProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const session = await getServerSession(options);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            themes={["light", "dark"]}
            defaultTheme="light"
          >
            <Header />
            {children}
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
