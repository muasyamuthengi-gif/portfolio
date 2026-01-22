"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";
// Data structures
  navigation = [
    { name: "About",       href: "#about" },
    { name: "Projects",    href: "#projects" },
    { name: "Services",    href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact",     href: "#contact" }
  ]

  socialLinks = [
    { name: "GitHub",  icon: Github,  href: "https://github.com/..." },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/..." },
    { name: "Twitter",  icon: Twitter,  href: "https://twitter.com/..." }
  ]

  // Layout structure
  <header fixed="top" zIndex="50" background="background/80" backdropBlur="md" borderBottom>
    <nav maxWidth="7xl" container padding="4" display="flex" justify="between" align="center">

      // Left: Logo/Branding
      <link href="/">
        <text bold size="xl">Bonface</text>
        <text small primary>Developer</text>
      </link>

      // Center: Desktop Navigation (hidden on mobile)
      <nav hidden="mobile" display="flex-lg" gap="8">
        for each navItem in navigation:
          <link href={navItem.href} muted hover="foreground">
            {navItem.name}
          </link>
      </nav>

      // Right Section: Desktop (hidden on mobile)
      <div hidden="mobile" display="flex-lg" gap="4" align="center">
        
        // Social Icons Row
        <row gap="2">
          for each social in socialLinks:
            <link href={social.href} external target="_blank" muted hover="foreground">
              <icon size="5" />
              <srOnly>{social.name}</srOnly>
            </link>
        </row>

        // CTA Button
        <button primary onClick="scrollTo(#contact)">
          Hire Me
        </button>

      </div>

      // Mobile Menu Toggle Button (visible only on mobile)
      <button mobile-only muted hover="foreground" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X size="6" /> : <Menu size="6" />}
        <srOnly>Toggle menu</srOnly>
      </button>

    </nav>

    // Mobile Menu Dropdown (visible when mobileMenuOpen === true)
    if mobileMenuOpen:
      <div mobile-only background="background" borderBottom padding="6" space="4">
        
        // Mobile Navigation Links
        for each navItem in navigation:
          <link href={navItem.href} block size="base" muted onClick={closeMobileMenu}>
            {navItem.name}
          </link>

        // Mobile Social Icons (with border divider)
        <row gap="4" paddingTop="4" borderTop>
          for each social in socialLinks:
            <link href={social.href} external muted>
              <icon size="5" />
            </link>
        </row>

        // Mobile CTA Button (full width)
        <button primary fullWidth onClick={closeMobileMenu}>
          Hire Me
        </button>

      </div>

  </header>
}
