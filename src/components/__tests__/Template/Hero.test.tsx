import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Hero from '../../Template/Hero';

describe('Hero', () => {
  it('renders the hero section', () => {
    render(<Hero />);

    const heroSection = document.querySelector('.hero');
    expect(heroSection).toBeInTheDocument();
  });

  it('displays the name as heading', () => {
    render(<Hero />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Liang Tang');
  });

  it('renders the tagline with Ipdchina and personal links', () => {
    render(<Hero />);

    const ipdLink = screen.getByRole('link', { name: /ipdchina/i });
    expect(ipdLink).toHaveAttribute('href', 'http://www.ipdchina.net/');
    expect(ipdLink).toHaveClass('hero-highlight');

    const ghLink = screen.getByRole('link', {
      name: /java, javafx and eclipse rcp/i,
    });
    expect(ghLink).toHaveAttribute(
      'href',
      'https://github.com/unknowIfGuestInDream',
    );
    expect(ghLink).toHaveClass('hero-highlight');
  });

  it('displays hero chips for credentials', () => {
    render(<Hero />);

    expect(screen.getByText('Java & JavaFX')).toBeInTheDocument();
    expect(screen.getByText('Eclipse RCP')).toBeInTheDocument();
    expect(screen.getByText('VSCode & Eclipse plugins')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Hero />);

    const aboutButton = screen.getByRole('link', { name: /about me/i });
    expect(aboutButton).toHaveAttribute('href', '/about');
    expect(aboutButton).toHaveClass('button-primary');

    const resumeButton = screen.getByRole('link', { name: /view resume/i });
    expect(resumeButton).toHaveAttribute('href', '/resume');
    expect(resumeButton).toHaveClass('button-secondary');
  });

  it('has decorative background elements', () => {
    render(<Hero />);

    const bg = document.querySelector('.hero-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveAttribute('aria-hidden', 'true');
  });
});
