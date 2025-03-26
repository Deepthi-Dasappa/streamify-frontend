export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800 mx-auto ">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row text-center">
        <p className="text-center mx-auto text-sm">
          Built by{" "}
          <a
            href="https://github.com/Deepthi-Dasappa"
            target="_blank"
            className="font-medium underline-offset-4"
          >
            Deepthi
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/Deepthi-Dasappa"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline-offset-4"
          >
            Github
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
