# CLAUDE.md — Onboarding & Best Practices for Claude Code

**Project Type**: [PROJECT_TYPE]
**Profile Focus**: [RESEARCHER/ENGINEER/DEVELOPER/CREATIVE/HUMANIST/TRANSLATOR]
**Last Updated**: [DATE]

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
    3. Make initial commit with project structure
    4. (Optional) Link to remote: `git remote add origin https://github.com/<user>/<repo>.git`

- **Is the current branch appropriate for this work?**
  - Check: `git branch --show-current`
  - If on `main/master` for experimental work:
    1. Create new branch: `git checkout -b <type>-<description>-YYYYMMDD`
  - Follow branch naming convention: `<type>-<description>-YYYYMMDD`

### **Project Structure Validation**
- **Are all key folders present?**
  - Required: `src/`, `docs/`, `configs/`, `scripts/`
  - Optional: `prompts/`, `logs/`, `tests/`, `tasks/`, `.claude/`
  - If NO: Create missing folders per project structure below

### **Configuration & Documentation**
- **Is project documentation current?**
  - `README.md` exists and describes project purpose
  - This `CLAUDE.md` reflects current workflows and protocols
  - Project-specific configuration files are present

### **Environment Setup**
- **Are development dependencies installed?**
  - Check language-specific dependencies (npm, pip, etc.)
  - Verify required tools are available
  - Test that development environment works

**If ANY of the above checks fail:**
- **STOP.**
- Complete the missing configuration steps before engaging in project work
- Update this checklist if new requirements are discovered

**If YES to all:**
- Note current branch and any existing work in progress
- Proceed with your task as described in this document

---

## 1. Project Purpose & Context

### **Project Mission**
[DESCRIBE_PROJECT_PURPOSE]

### **Development Approach**
- **Methodology**: [DEVELOPMENT_METHODOLOGY]
- **Quality Standards**: [QUALITY_REQUIREMENTS]
- **Success Criteria**: [SUCCESS_METRICS]

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
- [RESEARCH_FOCUS_AREA_1]
- [RESEARCH_FOCUS_AREA_2]
- [RESEARCH_FOCUS_AREA_3]
- [RESEARCH_FOCUS_AREA_4]

### **ENGINEER Domain**
- [ENGINEERING_FOCUS_AREA_1]
- [ENGINEERING_FOCUS_AREA_2]
- [ENGINEERING_FOCUS_AREA_3]
- [ENGINEERING_FOCUS_AREA_4]

### **DEVELOPER Domain**
- [DEVELOPMENT_FOCUS_AREA_1]
- [DEVELOPMENT_FOCUS_AREA_2]
- [DEVELOPMENT_FOCUS_AREA_3]
- [DEVELOPMENT_FOCUS_AREA_4]

### **CREATIVE Domain**
- [CREATIVE_FOCUS_AREA_1]
- [CREATIVE_FOCUS_AREA_2]
- [CREATIVE_FOCUS_AREA_3]
- [CREATIVE_FOCUS_AREA_4]

### **HUMANIST Domain**
- [HUMANIST_FOCUS_AREA_1]
- [HUMANIST_FOCUS_AREA_2]
- [HUMANIST_FOCUS_AREA_3]
- [HUMANIST_FOCUS_AREA_4]

### **TRANSLATOR Domain**
- [TRANSLATOR_FOCUS_AREA_1]
- [TRANSLATOR_FOCUS_AREA_2]
- [TRANSLATOR_FOCUS_AREA_3]
- [TRANSLATOR_FOCUS_AREA_4]

## Development Workflow

### **Multi-Profile Collaboration**
1. **RESEARCHER**: [RESEARCH_WORKFLOW_STEP]
2. **ENGINEER**: [ENGINEERING_WORKFLOW_STEP]
3. **DEVELOPER**: [DEVELOPMENT_WORKFLOW_STEP]
4. **Iteration**: Cross-profile review and refinement throughout process

## Platform Environment
- Windows + Git Bash: Use Unix commands (mv, ls, rm, mkdir)
- Path handling: Forward slashes in Git Bash, quote spaces
- Multi-profile workflow: Context switching between profiles as needed

### **Key Stakeholders**
- **Primary User**: [PRIMARY_USER]
- **Development Team**: [TEAM_COMPOSITION]
- **Integration Partners**: [EXTERNAL_DEPENDENCIES]

---

## 2. Core Development Principles

### **Version Control Discipline**
- **All changes** (code, prompts, configs, docs) must be tracked in Git
- **Branch-per-task**: Create new branch for each significant unit of work
- **Atomic commits**: Each commit represents one logical change
- **Clear commit messages**: Follow established commit message conventions

### **Project Organization**
- **Modular structure**: Clear separation of concerns across directories
- **Documentation-first**: Document decisions and protocols as they evolve
- **Configuration management**: Version control all configuration files
- **Reproducible setup**: Anyone should be able to set up and run the project

### **Quality Assurance**
- **Test before commit**: Validate changes before committing
- **Review before merge**: Code review for significant changes
- **Documentation currency**: Keep documentation up-to-date with changes
- **Clean maintenance**: Regular cleanup of unused branches and files

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

## 3. Project Structure Standards

```
project-root/
├── CLAUDE.md              # This file: context, protocols, onboarding
├── README.md              # Project overview for humans
├── .gitignore             # Git exclusion patterns
├── src/                   # Primary source code
├── docs/                  # Project documentation
├── configs/               # Configuration files
├── scripts/               # Automation and utility scripts
├── tests/                 # Test suites and validation
├── .claude/               # Claude Code specific configuration
│   ├── commands/          # Custom slash commands
│   ├── hooks/             # Behavioral hooks
│   └── subagents/         # Specialized AI agents
├── prompts/               # Prompt templates and experiments (if applicable)
├── logs/                  # Session logs and outputs (if applicable)
└── tasks/                 # Per-task isolation directories (if applicable)
```

### **Directory Guidelines**
- **src/**: Language-specific structure (follow language conventions)
- **docs/**: Organized by topic, include architecture decisions
- **configs/**: Environment-specific configurations, templates
- **scripts/**: Executable utilities for setup, testing, deployment
- **tests/**: Comprehensive test coverage, organized by test type

---

## 4. Git Workflow Protocol

### **Branch Strategy**
Follow the enhanced branch naming convention:
```bash
<type>-<description>-YYYYMMDD

# Examples:
feature-user-auth-2025-09-20       # New feature development
fix-login-timeout-2025-09-20       # Bug fixes
config-mcp-servers-2025-09-20      # Configuration updates
docs-api-guide-2025-09-20          # Documentation work
research-ecosystem-2025-09-20      # Research activities
experiment-new-approach-2025-09-20 # Experimental work
```

### **Commit Message Standards**
```bash
<type>: <description>

# Core types:
feat: add new feature or capability
fix: correct bugs or issues
config: configuration changes
docs: documentation updates
refactor: code restructuring without functional changes
test: testing additions or updates
research: research activities and findings
experiment: experimental work

# Examples:
feat: implement user authentication system
fix: resolve login timeout issue
config: update MCP server configuration
docs: add API usage examples
research: analyze community best practices
```

### **Workflow Steps**
1. **Before starting work**: Create appropriate branch from main
2. **During development**: Commit frequently with clear messages
3. **Before finishing**: Test functionality, update documentation
4. **Integration**: Merge to main only when complete and tested
5. **Cleanup**: Delete feature branch after successful merge

---

## 5. [PROJECT_TYPE] Specific Protocols

[PROJECT_SPECIFIC_SECTION]

---

## 6. Development Standards

### **Code Quality**
- Follow established code conventions for the project language
- Use meaningful variable and function names
- Include appropriate comments for complex logic
- Maintain consistent formatting and style

### **Documentation Requirements**
- Document all public APIs and interfaces
- Include usage examples for complex features
- Maintain architecture decision records for significant choices
- Update README.md with setup and usage instructions

### **Testing Approach**
- Write tests for core functionality
- Include both unit tests and integration tests where applicable
- Test edge cases and error conditions
- Maintain test coverage reporting if applicable

---

## 7. Memory Integration Protocols

### **Entity-Based Project Tracking**
- **Use mcp__memory__** for persistent project state across sessions
- **Create entities** for milestones, architectural decisions, implementation learnings
- **Cross-session continuity** through memory persistence and knowledge graph evolution
- **Document relationships** between entities to preserve context and dependencies

### **Profile-Specific Memory Spaces**

**RESEARCHER Memory Entities**:
- **Ecosystem Analysis**: [PROJECT_TYPE] landscape assessments, technology comparisons
- **Repository Evaluations**: Source quality assessments, implementation patterns
- **Requirements Documentation**: Feasibility studies, specification development
- **Competitive Analysis**: Feature mapping, gap identification

**ENGINEER Memory Entities**:
- **Architecture Decisions**: System design rationales, trade-off documentation
- **Integration Patterns**: Deployment strategies, configuration optimizations
- **Infrastructure Learnings**: [DEPLOYMENT_ENVIRONMENT] insights, scalability patterns
- **Security Assessments**: Risk mitigation strategies, access control patterns

**DEVELOPER Memory Entities**:
- **Implementation Patterns**: Code templates, debugging solutions
- **Testing Frameworks**: Validation approaches, quality assurance methods
- **Tool Chain Optimizations**: Workflow improvements, efficiency discoveries
- **Deployment Experiences**: Configuration successes, troubleshooting solutions

**CREATIVE Memory Entities**:
- **Creative Processes**: Ideation sessions, inspiration sources
- **Design Iterations**: Prototype evolution, creative decision rationale
- **Innovation Patterns**: Breakthrough approaches, creative problem-solving methods
- **Aesthetic Discoveries**: Design principles, visual communication insights

**HUMANIST Memory Entities**:
- **Human Impact Analysis**: User experience insights, accessibility considerations
- **Ethical Evaluations**: Moral implications, ethical decision frameworks
- **Social Context Studies**: Cultural considerations, community impact assessments
- **Inclusive Design Patterns**: Universal design principles, accessibility solutions

**TRANSLATOR Memory Entities**:
- **Translation Projects**: Language pair challenges, terminology management
- **Cultural Adaptations**: Localization insights, cultural sensitivity patterns
- **Quality Assurance Methods**: Translation validation, accuracy verification
- **Linguistic Discoveries**: Language pattern insights, communication optimization

### **Memory Persistence Strategy**
- **Session Initialization**: Always read memory graph to restore context
- **Continuous Updates**: Add observations to relevant entities during work
- **Cross-Profile Sharing**: Create relationships between profile-specific entities
- **Knowledge Evolution**: Update entity observations as understanding deepens

### **Documentation Frequency Guidelines**

#### **Axivo Documentation Patterns**
- **Project Context Determination**: Use `basename "$(pwd)"` for consistent project identification
- **Hierarchical Tagging Schema**: `#project-name #content-type #domain #activity #outcome`
- **Auto-Compact Integration**: Monitor context window usage for documentation timing
- **Profile-Specific Patterns**: Adapt documentation frequency to profile workflow intensity

#### **Documentation Triggers**
- **User-Initiated Documentation**: Always honor explicit documentation requests
- **Major Milestone Completion**: Document significant achievements and learnings
- **Context Window Pressure**: Create summary entities when approaching auto-compact
- **Session Transition**: Document session outcomes before extended breaks

---

## 8. Claude Code Integration

### **Memory & Context Management**
- **Axivo Integration**: Full memory graph persistence with entity-based project tracking
- **Cross-session continuity**: Memory entities + Git history provide complete context
- **Profile alignment**: Work style matches [PROFILE] methodology with behavioral framework integration

### **Tool Usage Guidelines**
- **Preferred tools**: [TOOL_PREFERENCES]
- **Search strategy**: [SEARCH_APPROACH]
- **File operations**: [FILE_OPERATION_GUIDELINES]

### **Communication Protocols**
- **Progress tracking**: Use TodoWrite for multi-step tasks
- **Decision documentation**: Record important decisions in this file
- **Error handling**: Document solutions to complex problems

---

## 9. Workflow Enhancement & Learning System

### **Profile-Aware Enhancement Rules**

1. **Before Major Operations**: Check CLAUDE.md for profile-specific and general instructions for the task
2. **After Encountering Errors**: Document solution with profile context, develop prevention steps, and note cross-profile implications
3. **When Completing Tasks**: Reflect on profile workflow efficiency and identify knowledge gaps
4. **Cross-Profile Learning**: Share applicable improvements across [ACTIVE_PROFILES] workflows
5. **Review/Report**: Present improvement opportunities with profile-specific recommendations
6. **If Gaps Found and Approved**: Update CLAUDE.md with approved improvements

### **Review/Report Format**

When identifying improvement opportunities, present:

```
**Issue Identified**: [Brief description of gap, error, or inefficiency with profile context]
**Proposed Solution**: [Specific CLAUDE.md addition or modification]
**Profile Impact**: [Which profiles benefit and how]
**Rationale**: [Why this would improve future interactions]
**Request**: "Should I add this improvement to CLAUDE.md?"
```

### **Autonomous Mode Override**

**Learning Curve Recognition**: User may instruct Claude Code to operate autonomously by saying:
- *"Skip review/report and apply improvements directly"*
- *"Use autonomous mode for documentation updates"*
- *"I trust your judgment on CLAUDE.md improvements"*

**When in Autonomous Mode**:
- Apply enhancement rules 1-3 and 6 directly
- Skip rule 5 (Review/Report)
- Continue until user requests return to review mode
- Still announce what improvements were made

### **Error Response Protocol**

**Systematic Error Learning**:
1. **Pattern Recognition**: Identify error type, root cause, and profile context
2. **Immediate Resolution**: Fix the current issue
3. **Prevention Documentation**: Add specific prevention guidelines to appropriate profile section
4. **Workflow Integration**: Update operational procedures for affected profiles
5. **Knowledge Persistence**: Ensure future sessions inherit the learning across profiles

### **Profile-Specific Learning Patterns**

**RESEARCHER Profile Learning**:
- [RESEARCH_LEARNING_PATTERN_1]
- [RESEARCH_LEARNING_PATTERN_2]
- [RESEARCH_LEARNING_PATTERN_3]
- [RESEARCH_LEARNING_PATTERN_4]

**ENGINEER Profile Learning**:
- [ENGINEERING_LEARNING_PATTERN_1]
- [ENGINEERING_LEARNING_PATTERN_2]
- [ENGINEERING_LEARNING_PATTERN_3]
- [ENGINEERING_LEARNING_PATTERN_4]

**DEVELOPER Profile Learning**:
- [DEVELOPMENT_LEARNING_PATTERN_1]
- [DEVELOPMENT_LEARNING_PATTERN_2]
- [DEVELOPMENT_LEARNING_PATTERN_3]
- [DEVELOPMENT_LEARNING_PATTERN_4]

**CREATIVE Profile Learning**:
- [CREATIVE_LEARNING_PATTERN_1]
- [CREATIVE_LEARNING_PATTERN_2]
- [CREATIVE_LEARNING_PATTERN_3]
- [CREATIVE_LEARNING_PATTERN_4]

**HUMANIST Profile Learning**:
- [HUMANIST_LEARNING_PATTERN_1]
- [HUMANIST_LEARNING_PATTERN_2]
- [HUMANIST_LEARNING_PATTERN_3]
- [HUMANIST_LEARNING_PATTERN_4]

**TRANSLATOR Profile Learning**:
- [TRANSLATOR_LEARNING_PATTERN_1]
- [TRANSLATOR_LEARNING_PATTERN_2]
- [TRANSLATOR_LEARNING_PATTERN_3]
- [TRANSLATOR_LEARNING_PATTERN_4]

### **Self-Reflection Checkpoints**

After completing significant tasks, evaluate by profile:
- **Efficiency**: Were there profile-specific workflow bottlenecks or redundancies?
- **Knowledge Gaps**: What profile-specific information would have accelerated the work?
- **Tool Usage**: Could different tools or approaches have been better for this profile?
- **Documentation Quality**: Are profile-specific instructions clear and complete?
- **Pattern Recognition**: What patterns emerge that should be systematized for this profile?
- **Cross-Profile Dependencies**: What learnings should be shared with other profiles?

### **Meta-Documentation Guidelines**

**Improvement Criteria**:
- Solutions must be **specific and actionable** for the relevant profile
- Instructions must be **clear for future Claude Code sessions**
- Changes must **improve efficiency or accuracy** within profile workflows
- Documentation must remain **concise and well-organized**
- Profile-specific improvements must consider **cross-profile implications**

**Update Principles**:
- Add error prevention steps immediately after resolution with profile context
- Document successful patterns for reuse within and across profiles
- Remove obsolete instructions when tools or workflows change
- Maintain logical organization and findability within profile structure
- Ensure profile-specific learnings enhance multi-profile collaboration

---

## 10. Automation & CI/CD (Optional)

### **Available Automation**
[AUTOMATION_DESCRIPTION]

### **Quality Gates**
[QUALITY_GATE_DESCRIPTION]

### **Deployment Process**
[DEPLOYMENT_DESCRIPTION]

---

## 11. Troubleshooting & Common Issues

### **Setup Problems**
[COMMON_SETUP_ISSUES]

### **Development Issues**
[COMMON_DEVELOPMENT_ISSUES]

### **Integration Problems**
[COMMON_INTEGRATION_ISSUES]

---

## 12. Project Evolution & Maintenance

### **Protocol Updates**
When updating this file:
1. **Document the change**: Include date, reason, and impact
2. **Version control**: Commit changes with clear description
3. **Communicate changes**: Ensure team is aware of protocol updates
4. **Validate updates**: Test that new protocols work as intended

### **Lessons Learned**
Document significant insights and improvements here:

#### [DATE]: [LESSON_TITLE]
- **Context**: [SITUATION_DESCRIPTION]
- **Solution**: [WHAT_WAS_DONE]
- **Impact**: [RESULT_OR_IMPROVEMENT]
- **Application**: [HOW_TO_APPLY_LEARNING]

---

## 13. External Resources & References

### **Documentation Links**
- [RELEVANT_DOCUMENTATION]

### **Community Resources**
- [COMMUNITY_LINKS]

### **Related Projects**
- [RELATED_PROJECT_LINKS]

---

_Claude, always follow this protocol when working on this project. Adapt the specific guidance based on the current task context while maintaining the universal standards defined here._

**Template Version**: 1.0
**Compatible with**: Enhanced Git Workflow Protocol v1.0
**Profile Support**: RESEARCHER, ENGINEER, DEVELOPER
**Last Review**: [DATE]