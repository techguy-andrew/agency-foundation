# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Standardized file structure following agency patterns
- Route groups for authentication and dashboard
- UI component library with Radix UI primitives
- Theme system with CSS custom properties
- Multiple theme variants (default, client-a, client-b, christmas, halloween)
- Type definitions organized by domain
- API route placeholders for items and authentication
- Prisma schema with User, Item, and Attachment models
- Configuration files for site and environment variables
- Comprehensive documentation (SETUP.md, .env.example)
- Layout components (Header, Sidebar, Footer, Navigation)
- Form components (ItemForm, LoginForm, SettingsForm)
- Feature components (ItemCard, FileGallery)

### Changed
- Moved types from app/types to root-level types/ directory
- Organized components by concern (ui, forms, layout, features)
- Moved globals.css to app/styles/ directory

## [0.1.0] - Initial Setup

### Added
- Next.js 15 project initialization
- Basic TypeScript configuration
- Tailwind CSS setup
- Initial component structure
