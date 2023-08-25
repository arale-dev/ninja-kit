const Page = () => {
  return (
    <div>
      <div className="bg-gray-800 w-screen h-screen flex flex-col text-gray-100 p-4">
        <h1 className="text-4xl font-bold text-center">WEB TEST</h1>

        <div className="text-2xl italic">Wanna see some typesafe data?</div>
        <div>
          <span className="font-bold">{"Yerba version: "}</span>
          {window.yerba.version}
        </div>
        <div>
          <span className="font-bold">
            {"Hashed Yerba version using node's builtin crypto: "}
          </span>
          {window.nodeCrypto.sha256sum(window.yerba.version.toString())}
        </div>
      </div>
    </div>
  );
};

export default Page;
