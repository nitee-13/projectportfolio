// components/Header.js
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}


