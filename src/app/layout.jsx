import "./globals.css";


export const metadata = {
  title: "Snehalata R Thapa",
  description: "Snehalata R Thapa, a dynamic entrepreneur, life skills and leadership trainer, and beauty pageant achiever, has earned accolades as Mrs. Bhairahawa 2019 and 2nd Runner-Up in Mrs. Nepal International 2019. With a passion for empowering others, she blends grace and expertise to inspire individuals and create meaningful impact in her community.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
