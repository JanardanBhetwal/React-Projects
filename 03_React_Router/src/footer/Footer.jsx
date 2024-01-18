function Footer() {
  return (
    <div className=" flex flex-row jusify-evenly bg-gray-100 h-48 text-xl p-2">
      <ul className="flex flex-col justify-evenly mx-auto">
        <li className="font-bold">Follow</li>
        <li>Help</li>
        <li>Resources</li>
      </ul>
      <ul className="flex flex-col justify-evenly mx-auto">
        <li className="font-bold">Legal</li>
        <li>Discord</li>
        <li>Terms and Conditions</li>
      </ul>
    </div>
  );
}

export default Footer;
