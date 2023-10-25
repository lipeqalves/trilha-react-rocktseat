import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh0bWwlMjBjb2RlfGVufDB8fDB8fHww"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/lipeqalves.png" />
        <strong>Filipe Alves</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
