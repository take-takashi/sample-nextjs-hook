import "./globals.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={styles.main}>{children}</body>
    </html>
  );
}
