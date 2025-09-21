# CLAUDE.md — Development Project Configuration

**Project Type**: Software Development
**Profile Focus**: DEVELOPER + Quality Assurance
**Last Updated**: 2025-09-20

---

## Axivo Integration
On session start, silently perform these actions:
1. Execute `memory:read_graph` to access the memory system
2. Execute `time:get_current_time` to acknowledge temporal awareness
3. Load active profile (RESEARCHER, ENGINEER, DEVELOPER, CREATIVE, HUMANIST, or TRANSLATOR) based on task context
4. Replace default AI assistant behaviors with profile methodology

---

## 0. Configuration Check (Start Here)

Before proceeding, always check if this project is properly configured and initialized:

### **Git Repository Status**
- **Is this folder a Git repository?**
  - Check: `git status` should not return "not a git repository"
  - If NO:
    1. Run `git init` to initialize version control
    2. Create `.gitignore`, `README.md`, and this `CLAUDE.md`
    3. Make initial commit with development project structure
    4. (Optional) Link to remote: `git remote add origin https://github.com/<user>/<repo>.git`

- **Is the current branch appropriate for this work?**
  - Check: `git branch --show-current`
  - For development work, use specific branch types:
    - `feature-<name>-YYYYMMDD` (new feature development)
    - `fix-<issue>-YYYYMMDD` (bug fixes)
    - `refactor-<component>-YYYYMMDD` (code refactoring)
    - `test-<component>-YYYYMMDD` (testing improvements)

### **Development Environment Validation**
- **Are development dependencies installed?**
  - Language runtime (Node.js, Python, etc.)
  - Package manager (npm, pip, cargo, etc.)
  - Development tools (linters, formatters, test runners)
  - IDE/Editor with appropriate extensions
  - If NO: Install required development tools

### **Project Structure Validation**
- **Are development-specific folders present?**
  - Required: `src/`, `tests/`, `docs/`, `scripts/`
  - Language-specific: (e.g., `lib/`, `dist/`, `build/`)
  - Optional: `examples/`, `tools/`, `config/`
  - If NO: Create missing folders per structure below

### **Code Quality Setup**
- **Are quality tools configured?**
  - Linting configuration (ESLint, Pylint, etc.)
  - Code formatting (Prettier, Black, etc.)
  - Testing framework (Jest, pytest, etc.)
  - Pre-commit hooks (if applicable)
  - If NO: Configure code quality tools

**If ANY of the above checks fail:**
- **STOP.**
- Complete the missing configuration steps before development work
- Update this checklist if new development requirements are discovered

**If YES to all:**
- Note current development branch and any work in progress
- Proceed with development as described below

---

## 1. Development Project Purpose & Context

### **Profile System Architecture**

#### **RESEARCHER Profile**
- **Purpose**: Strategic analysis, investigation, and documentation
- **Workspace**: `researcher/` directory with analysis, documentation, investigations
- **Methodology**: Systematic investigation → comprehensive analysis → strategic recommendations
- **Output**: Research reports, feasibility assessments, requirements documentation

#### **ENGINEER Profile**
- **Purpose**: System design, architecture planning, technical strategy
- **Workspace**: `engineer/` directory with architecture, integration, infrastructure
- **Methodology**: Requirements analysis → system design → technical specifications
- **Output**: Architecture diagrams, integration strategies, deployment plans

#### **DEVELOPER Profile**
- **Purpose**: Hands-on implementation, coding, testing, practical development
- **Workspace**: `developer/` directory with src, tests, configs, examples
- **Methodology**: Specifications → implementation → testing → validation
- **Output**: Working code, test suites, deployment-ready applications

#### **CREATIVE Profile**
- **Purpose**: Creative ideation, design thinking, innovative problem-solving
- **Workspace**: `creative/` directory with projects, inspiration, iterations
- **Methodology**: Inspiration → ideation → experimentation → refinement
- **Output**: Creative solutions, design prototypes, innovative approaches

#### **HUMANIST Profile**
- **Purpose**: Human-centered analysis, ethical considerations, social impact assessment
- **Workspace**: `humanist/` directory with analysis, ethics, impact assessments
- **Methodology**: Human needs analysis → ethical evaluation → social impact design
- **Output**: Human-centered recommendations, ethical guidelines, impact assessments

#### **TRANSLATOR Profile**
- **Purpose**: Language translation, localization, cross-cultural communication
- **Workspace**: `translator/` directory with projects, references, quality checks
- **Methodology**: Source analysis → translation → quality assurance → cultural adaptation
- **Output**: Translated content, localization guides, cultural adaptation strategies

## Technology Focus Areas

### **RESEARCHER Domain**
- Codebase analysis and documentation systems
- Competitive analysis and feature mapping
- Requirements gathering and specification development
- Strategic feasibility assessment

### **ENGINEER Domain**
- System architecture and integration design
- Infrastructure automation and deployment strategies
- Performance optimization and scalability planning
- Security architecture and risk mitigation

### **DEVELOPER Domain**
- Source code implementation and testing frameworks
- Package management and dependency analysis
- Code quality assurance and optimization
- Practical deployment and integration work

### **CREATIVE Domain**
- Creative problem-solving and innovative development
- User experience design and interface creativity
- Creative automation and workflow optimization
- Innovative documentation and communication

### **HUMANIST Domain**
- Accessibility and inclusive design considerations
- Ethical development and responsible technology
- User impact assessment and human-centered design
- Community building and social responsibility

### **TRANSLATOR Domain**
- Internationalization and localization implementation
- Multilingual support and language-specific optimizations
- Cross-cultural user experience and global accessibility
- Cultural adaptation and regional customization

## Development Workflow

### **Multi-Profile Collaboration**
1. **RESEARCHER**: Analyze target system → generate requirements and feasibility assessment
2. **ENGINEER**: Design architecture → create technical specifications and integration strategy
3. **DEVELOPER**: Implement solution → build, test, and deploy working applications
4. **Iteration**: Cross-profile review and refinement throughout development process

## Platform Environment
- Windows + Git Bash: Use Unix commands (mv, ls, rm, mkdir)
- Path handling: Forward slashes in Git Bash, quote spaces
- Multi-profile workflow: Context switching between profiles as needed

### **Project Mission**
[DESCRIBE_APPLICATION_PURPOSE]

### **Technical Requirements**
- **Primary Language**: [PROGRAMMING_LANGUAGE]
- **Framework/Platform**: [FRAMEWORK_OR_PLATFORM]
- **Target Environment**: [DEPLOYMENT_ENVIRONMENT]
- **Performance Requirements**: [PERFORMANCE_CRITERIA]

### **Development Approach**
- **Methodology**: [DEVELOPMENT_METHODOLOGY] (e.g., Agile, TDD, iterative)
- **Code Standards**: [CODING_STANDARDS] (e.g., style guides, conventions)
- **Quality Gates**: [QUALITY_REQUIREMENTS] (e.g., test coverage, code review)
- **Documentation Level**: [DOCUMENTATION_STANDARDS]

### **Success Criteria**
- **Functionality**: [FUNCTIONAL_REQUIREMENTS]
- **Quality**: [QUALITY_METRICS] (e.g., test coverage %, performance benchmarks)
- **Maintainability**: [MAINTAINABILITY_STANDARDS]
- **Deployment**: [DEPLOYMENT_CRITERIA]

---

## 2. Development Principles & Standards

### **Code Quality Standards**
- **Readability**: Write self-documenting code with clear intent
- **Maintainability**: Structure code for easy modification and extension
- **Performance**: Optimize for appropriate performance characteristics
- **Security**: Follow security best practices for the technology stack

### **Testing Philosophy**
- **Test Coverage**: Maintain comprehensive test coverage for core functionality
- **Test Types**: Include unit tests, integration tests, and end-to-end tests as appropriate
- **Test-Driven Development**: Write tests before implementation when applicable
- **Continuous Testing**: Run tests frequently during development

### **Documentation Standards**
- **Code Documentation**: Document complex logic and public interfaces
- **API Documentation**: Maintain current API documentation
- **Setup Documentation**: Keep setup and deployment instructions current
- **Decision Records**: Document significant architectural and technical decisions

### **MCP Tool Call Safety Protocol**

**External URL Research Priority:**
- **ALWAYS use WebFetch directly** for GitHub URLs, documentation sites, and external resources
- **DO NOT route external URLs through MCP research tools** (context7, documentation, github MCPs)
- **Reserve MCP tools** for internal documentation, cached content, and their specific designed purposes

**Tool Call Batching Restrictions:**
- **NEVER batch external API calls** (WebFetch, WebSearch) with MCP tool calls
- **NEVER batch multiple MCP research tools** when investigating external resources
- **Use sequential single calls** for external research: WebSearch → WebFetch → analysis
- **Only batch fast, reliable tools** (Read, Grep, local Bash commands)

**Error Prevention Pattern:**
- External link provided → Use WebFetch directly
- Need to research topic → Use WebSearch first, then WebFetch specific results
- Need cached documentation → Use appropriate MCP tool individually
- **Never assume MCPs are better for external content research**

**Rationale:** New MCPs changed default tool selection behavior, creating longer tool chains vulnerable to interruption and API conversation state corruption.

---

## 3. Development Project Structure

```
development-project-root/
├── CLAUDE.md              # This file: development project protocols
├── README.md              # Project overview, setup, and usage
├── .gitignore             # Git exclusion patterns
├── package.json           # Package configuration (Node.js) or equivalent
├── src/                   # Primary source code
│   ├── components/        # Reusable components (if applicable)
│   ├── services/          # Business logic and services
│   ├── utils/             # Utility functions and helpers
│   ├── types/             # Type definitions (TypeScript, etc.)
│   └── config/            # Application configuration
├── tests/                 # Test suites
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   ├── e2e/               # End-to-end tests
│   └── fixtures/          # Test data and fixtures
├── docs/                  # Project documentation
│   ├── api/               # API documentation
│   ├── architecture/      # Architecture documentation
│   ├── deployment/        # Deployment guides
│   └── development/       # Development guides
├── scripts/               # Development and build scripts
│   ├── build.sh           # Build automation
│   ├── test.sh            # Test automation
│   ├── deploy.sh          # Deployment scripts
│   └── setup.sh           # Environment setup
├── config/                # Configuration files
│   ├── development/       # Development environment config
│   ├── production/        # Production environment config
│   └── test/              # Test environment config
├── tools/                 # Development tools and utilities
└── dist/                  # Built/compiled output (if applicable)
```

---

## 4. Development Git Workflow Protocol

### **Development-Specific Branch Strategy**
```bash
# Feature development
feature-<name>-YYYYMMDD               # New feature implementation
enhancement-<component>-YYYYMMDD      # Enhancements to existing features

# Bug fixes and maintenance
fix-<issue-description>-YYYYMMDD      # Bug fixes
hotfix-<critical-issue>-YYYYMMDD      # Critical production fixes
refactor-<component>-YYYYMMDD         # Code refactoring

# Quality and testing
test-<component>-YYYYMMDD             # Test improvements
perf-<optimization>-YYYYMMDD          # Performance optimizations
security-<improvement>-YYYYMMDD       # Security improvements

# Infrastructure and tooling
config-<tool-or-env>-YYYYMMDD         # Configuration updates
tooling-<tool-name>-YYYYMMDD          # Development tooling updates
ci-<improvement>-YYYYMMDD             # CI/CD improvements
```

### **Development Commit Message Standards**
```bash
# Development-specific commit types
feat: new feature implementation
fix: bug fixes and corrections
refactor: code restructuring without functional changes
perf: performance improvements
test: testing additions or improvements
docs: documentation updates
style: code style and formatting changes
chore: maintenance tasks and tooling updates

# Examples:
feat: implement user authentication system
fix: resolve memory leak in data processing
refactor: restructure API endpoint handlers
perf: optimize database query performance
test: add integration tests for payment flow
docs: update API documentation with new endpoints
style: apply consistent code formatting
chore: update development dependencies
```

### **Pre-Commit Quality Checks**
Before committing development changes:
1. **Run Tests**: Execute relevant test suites
2. **Code Linting**: Check for style and syntax issues
3. **Type Checking**: Validate type annotations (if applicable)
4. **Build Verification**: Ensure code builds successfully
5. **Documentation Updates**: Update docs if public interfaces changed

---

## 5. Development Workflow Standards

### **Feature Development Process**
1. **Planning Phase**
   - Define feature requirements and acceptance criteria
   - Design API interfaces and data structures
   - Identify potential risks and dependencies
   - Create development branch

2. **Implementation Phase**
   - Write tests for new functionality (TDD approach)
   - Implement feature following established patterns
   - Ensure code follows project style guidelines
   - Add appropriate documentation

3. **Quality Assurance Phase**
   - Run comprehensive test suite
   - Perform code review (self-review or peer review)
   - Test integration with existing functionality
   - Validate performance characteristics

4. **Integration Phase**
   - Merge to main branch when quality checks pass
   - Update documentation and changelog
   - Deploy to appropriate environments
   - Monitor for issues post-deployment

### **Bug Fix Process**
1. **Issue Identification**
   - Reproduce the issue consistently
   - Identify root cause and scope of impact
   - Assess urgency and priority level
   - Create fix branch

2. **Fix Implementation**
   - Write test that reproduces the bug
   - Implement minimal fix that resolves the issue
   - Ensure fix doesn't introduce regressions
   - Update relevant documentation

3. **Validation**
   - Verify fix resolves original issue
   - Run full test suite to check for regressions
   - Test in environment similar to where issue occurred
   - Document fix for future reference

### **Code Review Standards**
- **Functionality**: Code works as intended and meets requirements
- **Quality**: Code follows established patterns and standards
- **Performance**: Code is appropriately optimized
- **Security**: Code follows security best practices
- **Maintainability**: Code is readable and well-structured
- **Testing**: Adequate test coverage for new functionality

---

## 6. Technology-Specific Protocols

### **Language/Framework Standards**
[TECHNOLOGY_SPECIFIC_GUIDELINES]

### **Dependency Management**
- **Version Pinning**: Pin dependency versions for reproducible builds
- **Security Updates**: Regularly update dependencies for security patches
- **Audit Process**: Regular security audits of dependencies
- **Documentation**: Document rationale for major dependency choices

### **Build and Deployment**
- **Build Automation**: Automated build process with clear steps
- **Environment Parity**: Consistent environments across development/staging/production
- **Configuration Management**: Externalized configuration for different environments
- **Deployment Automation**: Automated deployment with rollback capability

---

## 7. Quality Assurance & Testing

### **Testing Strategy**
```bash
# Test execution commands
npm test              # or equivalent for your stack
npm run test:unit     # Unit tests only
npm run test:integration  # Integration tests
npm run test:e2e      # End-to-end tests
npm run test:coverage # Test coverage reporting
```

### **Quality Metrics**
- **Test Coverage**: Maintain >80% test coverage for core functionality
- **Code Quality**: Use static analysis tools to maintain code quality
- **Performance**: Monitor and test performance characteristics
- **Security**: Regular security scanning and vulnerability assessment

### **Continuous Integration**
```yaml
# Example CI configuration
name: Development CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Environment
      run: |
        # Install dependencies
        # Setup environment
    - name: Run Tests
      run: |
        npm run test:all
        npm run lint
        npm run build
    - name: Security Scan
      run: |
        npm audit
        # Additional security scanning
```

---

## 8. Memory Integration Protocols

### **Entity-Based Development Tracking**
- **Use mcp__memory__** for persistent development state across sessions
- **Create entities** for implementation milestones, debugging solutions, architectural decisions
- **Cross-session continuity** through memory persistence and development knowledge graph evolution
- **Document relationships** between code components and development decisions

### **Development Memory Spaces**

**DEVELOPER Memory Entities**:
- **Implementation Patterns**: Code templates, debugging solutions, testing frameworks
- **Testing Frameworks**: Validation approaches, quality assurance methods
- **Tool Chain Optimizations**: Workflow improvements, efficiency discoveries
- **Deployment Experiences**: Configuration successes, troubleshooting solutions

### **Development Documentation Frequency Guidelines**

#### **Development-Specific Documentation Patterns**
- **Code Context Determination**: Use `basename "$(pwd)"` + component name for identification
- **Development Tagging Schema**: `#development #implementation #testing #debugging #deployment`
- **Auto-Compact Integration**: Monitor context window during intensive coding sessions
- **Implementation Intensity Adaptation**: Increase documentation during complex feature development

#### **Development Documentation Triggers**
- **Feature Completion**: Document implementation approaches and architectural decisions
- **Bug Resolution**: Record debugging processes and solution patterns
- **Testing Milestones**: Document test coverage achievements and validation approaches
- **Deployment Events**: Record deployment procedures and environment configurations

---

## 9. Development Workflow Enhancement

### **Development Learning System**
- **Pattern Recognition**: Identify successful implementation patterns and coding approaches
- **Solution Documentation**: Preserve debugging techniques and problem resolution methods
- **Workflow Optimization**: Track and improve development efficiency and code quality
- **Cross-Component Knowledge Transfer**: Share implementation insights between different code areas

### **Code Quality Assurance**
- **Implementation Validation**: Systematic testing of code functionality and integration
- **Error Prevention**: Document common pitfalls and prevention strategies
- **Quality Metrics**: Maintain code quality standards through systematic measurement
- **Knowledge Preservation**: Ensure development insights persist across sessions

---

## 10. Development Tools & Integration

### **Required Development Tools**
- **Code Editor**: [PREFERRED_EDITOR] with appropriate extensions
- **Version Control**: Git with established workflow
- **Package Manager**: [PACKAGE_MANAGER] for dependency management
- **Testing Framework**: [TESTING_FRAMEWORK] for test execution
- **Build Tools**: [BUILD_TOOLS] for compilation and bundling

### **Recommended Tools**
- **Linting**: [LINTER] for code quality enforcement
- **Formatting**: [FORMATTER] for consistent code style
- **Type Checking**: [TYPE_CHECKER] for static type analysis
- **Debugging**: [DEBUGGER] for development debugging
- **Performance**: [PROFILER] for performance analysis

### **Claude Code Integration**
- **File Operations**: Efficient file reading and modification
- **Code Analysis**: Understanding existing codebase patterns
- **Test Integration**: Running and interpreting test results
- **Documentation**: Generating and updating documentation

---

## 11. Development Troubleshooting

### **Common Development Issues**
- **Dependency Problems**: Version conflicts, missing packages
- **Build Failures**: Compilation errors, configuration issues
- **Test Failures**: Flaky tests, environment-specific issues
- **Performance Issues**: Memory leaks, slow operations

### **Debugging Strategies**
- **Systematic Approach**: Isolate variables and test systematically
- **Logging**: Use appropriate logging levels and structured logging
- **Testing**: Write tests to reproduce and verify fixes
- **Documentation**: Document solutions for future reference

### **Environment Issues**
- **Development Setup**: Consistent development environment setup
- **Dependency Management**: Managing package versions and conflicts
- **Configuration**: Environment-specific configuration management
- **Deployment**: Deployment-related issues and troubleshooting

---

## 12. Development Project Evolution

### **Code Maintenance**
- **Refactoring**: Regular code refactoring to improve maintainability
- **Dependency Updates**: Keep dependencies current and secure
- **Performance Optimization**: Monitor and improve performance
- **Technical Debt**: Address technical debt systematically

### **Feature Evolution**
- **User Feedback**: Incorporate user feedback into development priorities
- **Technology Updates**: Adopt new technologies and patterns appropriately
- **Scalability**: Plan for growth and scaling requirements
- **Maintainability**: Ensure long-term maintainability of codebase

### **Lessons Learned**

#### 2025-09-20: Template Development Process
- **Context**: Creating standardized CLAUDE.md templates for different project types
- **Approach**: Based templates on community research and established patterns
- **Implementation**: Systematic template creation with comprehensive configuration checks
- **Application**: Use templates as foundation for consistent project setup

---

## 13. Development Resources & References

### **Technology Documentation**
- [Language Documentation]
- [Framework Documentation]
- [Library Documentation]
- [Platform Documentation]

### **Development Best Practices**
- [Coding Standards Guide]
- [Testing Best Practices]
- [Security Guidelines]
- [Performance Optimization]

### **Community Resources**
- [Developer Communities]
- [Open Source Projects]
- [Learning Resources]
- [Technical Blogs and Tutorials]

---

_Claude, always follow this development-specific protocol when working on software development projects. Maintain high code quality standards and ensure comprehensive testing and documentation._

**Template Version**: 1.0
**Compatible with**: Enhanced Git Workflow Protocol v1.0
**Development Focus**: Quality-driven software development
**Profile Support**: DEVELOPER focused with quality assurance emphasis
**Last Review**: 2025-09-20