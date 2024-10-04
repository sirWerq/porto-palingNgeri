import { Avatar } from "@mui/material";

export default function NavbarPage() {
  return (
    <div className="w-full h-16 flex flex-col justify-center fixed">
      <div className="flex gap-3 items-center justify-around">
        <Avatar
          alt="Remy Sharp"
          src="	https://failzuma.github.io/img/avatar-okabe-small.webp"
        />
        <nav>
          <ul className="flex gap-3">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <p>bendera</p>
          <p>light</p>
        </div>
      </div>
    </div>
  );
}
