import Link from "next/link";
import "../styles/login.css";

export default function page() {
  return (
    <div className="login">
      <form className="flex flex-col gap-4">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button className="btn">Login</button>
        <p>Didn't have account ? <Link href={'/signup'}>Signup</Link> </p>
      </form>
    </div>
  );
}
