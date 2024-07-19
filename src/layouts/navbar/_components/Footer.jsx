const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;