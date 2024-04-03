import "./globals.css";
import "./reset.css";

export const metadata = {
  title: "Linkbrary",
  description: "링크를 저장해보세요",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
