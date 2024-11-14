# Project Structure

## Introduction

This document provides a comprehensive overview of the directory structure for the `CasinoJs` repository. It outlines the purpose and organization of each directory and file, ensuring a clear understanding of where to find various components of the project.

## Table of Contents

- [Project Structure](#project-structure)
  - [Introduction](#introduction)
  - [Table of Contents](#table-of-contents)
  - [./ Directory Layout](#-directory-layout)
  - [./.envs Directory Layout](#envs-directory-layout)
  - [./.github Directory Layout](#github-directory-layout)
  - [./coverage Directory Layout](#coverage-directory-layout)
  - [./dist Directory Layout](#dist-directory-layout)
  - [./docs Directory Layout](#docs-directory-layout)
  - [./src Directory Layout](#src-directory-layout)
  - [./src/enums Directory Layout](#srcenums-directory-layout)
  - [./src/events Directory Layout](#srcevents-directory-layout)
  - [./src/interfaces Directory Layout](#srcinterfaces-directory-layout)
  - [./src/models Directory Layout](#srcmodels-directory-layout)
  - [./tests Directory Layout](#tests-directory-layout)
  - [./tests/enums Directory Layout](#testsenums-directory-layout)
  - [./tests/events Directory Layout](#testsevents-directory-layout)
  - [./tests/interfaces Directory Layout](#testsinterfaces-directory-layout)
  - [./tests/models Directory Layout](#testsmodels-directory-layout)

## ./ Directory Layout

```bash
├── /.envs                                    # Environment configuration files for different environments
├── /.github                                  # GitHub configuration files for commits, issues, and PR templates
├── /coverage                                 # Test coverage reports generated after running the test suite
├── /dist                                     # Compiled output files generated by TypeScript for distribution
├── /docs                                     # Documentation and guides for the project
├── /src                                      # Source code for the CasinoJs library
├── /tests                                    # Unit tests for verifying poker models and project functionality
├── .gitignore                                # Specifies files and directories ignored by Git
├── jest.config.js                            # Configuration file for Jest, defining paths and options for testing
├── LICENSE                                   # License file outlining the terms of distribution
├── package-lock.json                         # Dependency tree capture for consistent installations
├── package.json                              # Project metadata, including dependencies and scripts
├── README.md                                 # Overview of the project, with setup and usage information
├── tsconfig.cjs.json                         # TypeScript configuration for CommonJS builds
├── tsconfig.esm.json                         # TypeScript configuration for ESModule builds
└── tsconfig.json                             # Main TypeScript configuration for overall compiler options
```

## ./.envs Directory Layout

```bash
├── .env.development.local.example        # Development environment configuration file example
├── .env.example                          # General local development configuration file example
├── .env.local.example                    # Local overrides configuration file example (machine-specific)
├── .env.production.local.example         # Production deployment configuration file example
└── .env.test.local.example               # Test environment configuration file example
```

## ./.github Directory Layout

```bash
├── /COMMIT_TEMPLATE                      # Directory holding templates for commit messages
│   └── commit_template.md                # Markdown template for consistent commit messages, ensuring detailed descriptions with title, summary, type, and other sections
├── /ISSUE_TEMPLATE                       # Directory containing templates for creating GitHub issues
│   ├── bug_report_form.yml               # YAML configuration for submitting bug reports via GitHub’s form-based interface
│   ├── bug_report_template.md            # Markdown template for reporting bugs, with fields for issue description, steps to reproduce, expected vs. actual behavior, etc.
│   └── feature_request_template.md       # Markdown template for requesting new features or improvements, outlining the feature's purpose and desired functionality
└── /PULL_REQUEST_TEMPLATE                # Directory containing templates for submitting pull requests
    └── pull_request_template.md          # Markdown template with structured fields for pull request descriptions, including changes summary, purpose, testing notes, and checklist
```

## ./coverage Directory Layout

```bash
├── /Icov-report                          # HTML-based coverage reports directory
│   ├── /enums                            # Coverage for enums in the project
│   ├── /models                           # Coverage for models in the project
│   ├── base.css                          # CSS styling for coverage reports
│   ├── block-navigation.js               # JavaScript for navigation within the report
│   ├── favicon.png                       # Favicon for the report HTML pages
│   ├── index.html                        # Main entry point for the coverage report
│   ├── prettify.css                      # CSS for code snippet formatting
│   ├── prettify.js                       # JavaScript for syntax highlighting
│   ├── sort-arrow-sprite.png             # Arrow sprite used in report navigation
│   └── sorter.js                         # JavaScript for sorting report data
│
├── clover.xml                            # XML format report for coverage analysis tools
├── coverage-final.json                   # JSON summary of coverage results
└── lcov.info                             # LCOV format coverage report for tools like Coveralls
```

## ./dist Directory Layout

```bash
├── /cjs                                  # CommonJS entry point after TypeScript compilation
│   ├── enums/                            # Compiled enums for CommonJS
│   ├── interfaces/                       # Compiled interfaces for CommonJS
│   ├── models/                           # Compiled models for CommonJS
│   ├── index.d.ts                        # TypeScript declaration for CommonJS entry point
│   ├── index.js                          # CommonJS entry point after compilation
│   └── index.js.map                      # Source map for CommonJS entry point
│
└── /esm                                  # ESModule entry point after TypeScript compilation
    ├── enums/                            # Compiled enums for ESModule
    ├── interfaces/                       # Compiled interfaces for ESModule
    ├── models/                           # Compiled models for ESModule
    ├── index.d.ts                        # TypeScript declaration for ESModule entry point
    ├── index.js                          # ESModule entry point after compilation
    └── index.js.map                      # Source map for ESModule entry point
```

## ./docs Directory Layout

```bash
├── /site                                 # Typedoc generated documentation
│   ├── assets/                           # Static assets for the documentation site
│   ├── classes/                          # Documentation for classes in the project
│   ├── enums/                            # Documentation for enums in the project
│   ├── interfaces/                       # Documentation for interfaces in the project
│   ├── media/                            # Media files like images and diagrams
│   ├── modules/                          # Categorized documentation for modules
│   ├── .nojekyll                         # Prevents GitHub Pages from processing with Jekyll
│   ├── hierarchy.html                    # Project structure in hierarchical format
│   ├── index.html                        # Main entry for the documentation site
│   └── modules.html                      # List of modules documented within the site
│
├── CHANGELOG.md                          # Record of changes, updates, and version history
├── CONTRIBUTING.md                       # Guidelines for contributing to the project
├── DEVELOPMENT_GUIDE.md                  # Guide for setting up and contributing to the project
├── DOCS.md                               # API details, usage instructions, and best practices
└── PROJECT_STRUCTURE.md                  # Detailed explanation of the project directory structure
```

## ./src Directory Layout

```bash
├── /enums                                # TypeScript enums for various poker game-related entities
├── /events                               # TypeScript event structures for handling and managing poker events
├── /interfaces                           # TypeScript interfaces for poker game entities defining structures
├── /models                               # Core poker models and logic implementations for the game mechanics
└── index.ts                              # Main export for all modules in the src directory
```

## ./src/enums Directory Layout

```bash
├── /casinoEventNames                 # Enum for different casino-related event names
│   └── index.ts                      # Main export for the casino event names enum
├── /pokerPhaseNames                  # Enum for the names of different poker phases
│   └── index.ts                      # Main export for the poker phase names enum
├── /pokerSeatEventNames              # Enum for seat-related event names in poker
│   └── index.ts                      # Main export for the poker seat event names enum
├── /rank                             # Enum for the ranks of playing cards
│   └── index.ts                      # Main export for card rank types
├── /suit                             # Enum for the suits of playing cards
│   └── index.ts                      # Main export for card suit types
└── index.ts                          # Aggregated export for all enums in the project
```

## ./src/events Directory Layout

```bash
├── /_baseEvent                       # Base event structure shared across all poker-related events
│   └── index.ts                      # Main export for the base event structure (_BaseEvent)
├── /pokerSeatEvents                  # Events specific to seat management in poker (e.g., seat occupancy)
│   ├── /pokerSeatEvent               # Core event structure for seat-related events
│   │   └── index.ts                  # Export for the poker seat event interface
│   ├── /pokerSeatOccupiedEvent       # Specific event structure for seat occupancy
│   │   └── index.ts                  # Export for the poker seat occupied event interface
│   ├── /pokerSeatVacatedEvent        # Specific event structure for vacating a seat
│   │   └── index.ts                  # Export for the poker seat vacated event interface
│   └── index.ts                      # Aggregated export for all poker seat events
└── index.ts                          # Main export for all events in the project
```

## ./src/interfaces Directory Layout

```bash
├── /card                             # Interface defining the structure of a poker card (e.g., rank, suit)
│   └── index.ts                      # Export for card-related interfaces
├── /casino                           # Interface defining the structure of a casino (e.g., rooms, tables)
│   └── index.ts                      # Export for casino-related interfaces
├── /deck                             # Interface defining the structure and behavior of a deck of cards
│   └── index.ts                      # Export for deck-related interfaces
├── /pokerGame                        # Interface defining the structure of a poker game (e.g., phases, players)
│   └── index.ts                      # Export for poker game-related interfaces
├── /pokerPhase                       # Interface defining poker phases and phase transitions during gameplay
│   └── index.ts                      # Export for poker phase-related interfaces
├── /pokerPlayer                      # Interface defining the structure and behavior of a poker player
│   └── index.ts                      # Export for poker player-related interfaces
├── /pokerRoom                        # Interface defining the structure of a poker room, including table and player management
│   └── index.ts                      # Export for poker room-related interfaces
├── /pokerSeat                        # Interface defining a seat at a poker table (e.g., player sitting, bet tracking)
│   └── index.ts                      # Export for poker seat-related interfaces
├── /pokerTable                       # Interface defining the structure and behavior of a poker table (e.g., seating, blinds)
│   └── index.ts                      # Export for poker table-related interfaces
└── index.ts                          # Main export for all interfaces in the project
```

## ./src/models Directory Layout

```bash
├── /card                             # Class implementation for a poker card, handling rank and suit logic
│   └── index.ts                      # Class definition and export for card logic
├── /casino                           # Class implementation for a casino, handling multiple rooms and tables
│   └── index.ts                      # Class definition and export for casino logic
├── /deck                             # Class implementation for a deck of cards, including shuffle and draw logic
│   └── index.ts                      # Class definition and export for deck logic
├── /pokerGame                        # Class implementation for managing poker game phases, bets, and progression
│   └── index.ts                      # Class definition and export for poker game logic
├── /pokerPhase                       # Class implementation for handling transitions between poker phases
│   └── index.ts                      # Class definition and export for poker phase logic
├── /pokerPlayer                      # Class implementation for a poker player, handling actions, chips, and hands
│   └── index.ts                      # Class definition and export for poker player logic
├── /pokerRoom                        # Class implementation for managing poker rooms and player seating
│   └── index.ts                      # Class definition and export for poker room logic
├── /pokerSeat                        # Class implementation for poker seat behavior (e.g., seating, betting)
│   └── index.ts                      # Class definition and export for poker seat logic
├── /pokerTable                       # Class implementation for poker table behavior (e.g., player seating, blinds)
│   └── index.ts                      # Class definition and export for poker table logic
└── index.ts                          # Main export for all models in the project
```

## ./tests Directory Layout

```bash
├── /enums                                # Unit tests for enums
├── /events                               # Unit tests for events
├── /interfaces                           # Unit tests for interfaces
├── /models                               # Unit tests for models
└── index.test.ts                         # Main test file exporting all test modules
```

## ./tests/enums Directory Layout

```bash
├── /casinoEventNames                 # Enum for different casino-related event names
│   └── index.test.ts                 # Test for the casino event names enum
├── /pokerPhaseNames                  # Enum for the names of different poker phases
│   └── index.test.ts                 # Test for the poker phase names enum
├── /pokerSeatEventNames              # Enum for seat-related event names in poker
│   └── index.test.ts                 # Test for the poker seat event names enum
├── /rank                             # Enum for the ranks of playing cards
│   └── index.test.ts                 # Test for card rank types
├── /suit                             # Enum for the suits of playing cards
│   └── index.test.ts                 # Test for card suit types
└── index.test.ts                     # Aggregated export for all enums in the project
```

## ./tests/events Directory Layout

```bash
├── /_baseEvent                       # Base event structure shared across all poker-related events
│   └── index.test.ts                 # Test for the base event structure (_BaseEvent)
├── /pokerSeatEvents                  # Events specific to seat management in poker (e.g., seat occupancy)
│   ├── /pokerSeatEvent               # Core event structure for seat-related events
│   │   └── index.test.ts             # Test for the poker seat event interface
│   ├── /pokerSeatOccupiedEvent       # Specific event structure for seat occupancy
│   │   └── index.test.ts             # Test for the poker seat occupied event interface
│   ├── /pokerSeatVacatedEvent        # Specific event structure for vacating a seat
│   │   └── index.test.ts             # Test for the poker seat vacated event interface
│   └── index.test.ts                 # Aggregated export for all poker seat events
└── index.test.ts                     # Main export for all events in the project
```

## ./tests/interfaces Directory Layout

```bash
├── /card                             # Interface defining the structure of a poker card (e.g., rank, suit)
│   └── index.test.ts                 # Test for card-related interfaces
├── /casino                           # Interface defining the structure of a casino (e.g., rooms, tables)
│   └── index.test.ts                 # Test for casino-related interfaces
├── /deck                             # Interface defining the structure and behavior of a deck of cards
│   └── index.test.ts                 # Test for deck-related interfaces
├── /pokerGame                        # Interface defining the structure of a poker game (e.g., phases, players)
│   └── index.test.ts                 # Test for poker game-related interfaces
├── /pokerPhase                       # Interface defining poker phases and phase transitions during gameplay
│   └── index.test.ts                 # Test for poker phase-related interfaces
├── /pokerPlayer                      # Interface defining the structure and behavior of a poker player
│   └── index.test.ts                 # Test for poker player-related interfaces
├── /pokerRoom                        # Interface defining the structure of a poker room, including table and player management
│   └── index.test.ts                 # Test for poker room-related interfaces
├── /pokerSeat                        # Interface defining a seat at a poker table (e.g., player sitting, bet tracking)
│   └── index.test.ts                 # Test for poker seat-related interfaces
├── /pokerTable                       # Interface defining the structure and behavior of a poker table (e.g., seating, blinds)
│   └── index.test.ts                 # Test for poker table-related interfaces
└── index.test.ts                     # Main export for all interfaces in the project
```

## ./tests/models Directory Layout

```bash
├── /card                             # Class implementation for a poker card, handling rank and suit logic
│   └── index.test.ts                 # Test for card logic
├── /casino                           # Class implementation for a casino, handling multiple rooms and tables
│   └── index.test.ts                 # Test for casino logic
├── /deck                             # Class implementation for a deck of cards, including shuffle and draw logic
│   └── index.test.ts                 # Test for deck logic
├── /pokerGame                        # Class implementation for managing poker game phases, bets, and progression
│   └── index.test.ts                 # Test for poker game logic
├── /pokerPhase                       # Class implementation for handling transitions between poker phases
│   └── index.test.ts                 # Test for poker phase logic
├── /pokerPlayer                      # Class implementation for a poker player, handling actions, chips, and hands
│   └── index.test.ts                 # Test for poker player logic
├── /pokerRoom                        # Class implementation for managing poker rooms and player seating
│   └── index.test.ts                 # Test for poker room logic
├── /pokerSeat                        # Class implementation for poker seat behavior (e.g., seating, betting)
│   └── index.test.ts                 # Test for poker seat logic
├── /pokerTable                       # Class implementation for poker table behavior (e.g., player seating, blinds)
│   └── index.test.ts                 # Test for poker table logic
└── index.test.ts                     # Main export for all models in the project
```