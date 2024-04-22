import Input from "./componetns/Input";
import Button from "./componetns/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 bg-white gap-2">
      <div className="w-dvh h-[2rem]">
        <img className="h-full"
          src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
      </div>
      <div className="w-[90%]">
        <form className="flex flex-col gap-2 items-center">
          <Input placeholder="Moobile number or email address" />
          <Input placeholder="Password" />
          <Button />
          <a
            className="text-blue-700 text-[12px]"
            href="">Forgotten password?</a>
          <div className="flex w-full items-center gap-[1rem]">
            <hr className="flex-1" />
            <p>or</p>
            <hr className="flex-1" />
          </div>
          <button className="border-[1px] px-[4rem] py-[2px]">Create new account</button>
        </form>
      </div>
      <div className="flex flex-col items-center w-full pt-[4rem] gap-[1rem] ">
        <div className="flex w-full justify-around">
          <div className="text-blue-700 text-[12px] flex flex-col items-center">
            <a className="text-gray-600" href="">English (UK)</a>
            <a href="">日本語</a>
            <a href="">Tiếng Việt</a>
            <a href="">Português (Brasil)</a>
          </div>
          <div className="text-blue-700 text-[12px] flex flex-col items-center">
            <a href="">ภาษาไทย</a>
            <a href="">中文(简体)</a>
            <a href="">Español</a>
          </div>
        </div>
        <div className="flex text-[8px] gap-2 items-center text-gray-600">
          <p>About</p>
          <p className="text-[3px] ">&#11044;</p>
          <p>Help</p>
          <p className="text-[3px] ">&#11044;</p>
          <p>More</p>
        </div>
        <div className="text-[12px] text-gray-600">Meta &copy; 2024</div>
      </div>
    </main>
  );
}
