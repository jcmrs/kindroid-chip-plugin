# CLAUDE.md — MCP Server Project Configuration

**Project Type**: MCP Server Development & Integration
**Profile Focus**: DEVELOPER + ENGINEER
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
    3. Make initial commit with MCP project structure
    4. (Optional) Link to remote: `git remote add origin https://github.com/<user>/<repo>.git`

- **Is the current branch appropriate for this work?**
  - Check: `git branch --show-current`
  - For MCP work, use specific branch types:
    - `mcp-add-<server-name>-YYYYMMDD` (adding new servers)
    - `mcp-test-<server-name>-YYYYMMDD` (testing servers)
    - `config-mcp-<change>-YYYYMMDD` (configuration updates)

### **MCP Configuration Validation**
- **Is .mcp.json valid?**
  - Check: `python -m json.tool .mcp.json`
  - If NO: Fix JSON syntax errors before proceeding

- **Are MCP servers accessible?**
  - Test: Start Claude Code and verify all servers load
  - Check: No connection errors in Claude Code startup
  - If NO: Debug server configurations and dependencies

### **Project Structure Validation**
- **Are MCP-specific folders present?**
  - Required: `servers/`, `configs/`, `docs/`, `scripts/`, `tests/`
  - Optional: `examples/`, `templates/`, `tools/`
  - If NO: Create missing folders per structure below

### **Development Environment**
- **Are MCP development tools available?**
  - Node.js/npm for TypeScript MCP servers
  - Python/pip for Python MCP servers
  - Git for version control
  - Claude Code for testing
  - If NO: Install required tools before proceeding

**If ANY of the above checks fail:**
- **STOP.**
- Complete the missing configuration steps before MCP development work
- Update this checklist if new MCP requirements are discovered

**If YES to all:**
- Note current MCP server configuration
- Proceed with MCP development as described below

---

## 1. MCP Project Purpose & Context

### **Project Mission**
Develop, test, and maintain a comprehensive collection of Model Context Protocol (MCP) servers that enhance Claude Code capabilities across development workflows.

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
- MCP ecosystem analysis and documentation systems
- Server quality assessment and comparative analysis
- MCP requirements gathering and specification development
- MCP strategic feasibility assessment

### **ENGINEER Domain**
- MCP system architecture and integration design
- MCP infrastructure automation and deployment strategies
- MCP performance optimization and scalability planning
- MCP security architecture and risk mitigation

### **DEVELOPER Domain**
- MCP server implementation and testing frameworks
- MCP package management and dependency analysis
- MCP code quality assurance and optimization
- MCP practical deployment and integration work

### **CREATIVE Domain**
- MCP server innovation and creative problem-solving
- MCP user experience design and interface creativity
- MCP workflow optimization and creative automation
- MCP community engagement and creative documentation

### **HUMANIST Domain**
- MCP accessibility and inclusive design considerations
- MCP ethical implications and responsible development
- MCP user impact assessment and human-centered design
- MCP community building and social impact evaluation

### **TRANSLATOR Domain**
- MCP server internationalization and localization
- MCP documentation translation and cultural adaptation
- MCP cross-cultural communication and global accessibility
- MCP multilingual support and language-specific optimizations

## Development Workflow

### **Multi-Profile Collaboration**
1. **RESEARCHER**: Analyze MCP ecosystem → generate server requirements and feasibility assessment
2. **ENGINEER**: Design MCP architecture → create technical specifications and integration strategy
3. **DEVELOPER**: Implement MCP servers → build, test, and deploy working applications
4. **Iteration**: Cross-profile review and refinement throughout MCP development process

## Platform Environment
- Windows + Git Bash: Use Unix commands (mv, ls, rm, mkdir)
- Path handling: Forward slashes in Git Bash, quote spaces
- Multi-profile workflow: Context switching between profiles as needed

### **Development Approach**
- **Community-Aligned**: Follow patterns from centminmod, GWUDCAP, oxygen-fragment repositories
- **Systematic Testing**: Validate all MCP servers before integration
- **Documentation-First**: Document server capabilities, installation, and usage
- **Profile Integration**: Ensure servers enhance RESEARCHER, ENGINEER, DEVELOPER workflows

### **Success Criteria**
- All MCP servers install and function correctly
- Configuration is reproducible across environments
- Documentation enables easy adoption by others
- Server collection addresses identified capability gaps

---

## 2. MCP Development Principles

### **Server Quality Standards**
- **Functionality**: Servers must provide clear, documented capabilities
- **Reliability**: Stable operation without crashes or memory leaks
- **Performance**: Reasonable response times and resource usage
- **Integration**: Seamless operation with existing MCP infrastructure

### **Configuration Management**
- **Version Control**: All .mcp.json configurations tracked in Git
- **Environment Specific**: Separate configs for development/production
- **Path Management**: Use relative paths where possible for portability
- **Documentation**: Document any special configuration requirements

### **Testing Protocol**
- **Installation Testing**: Verify server installation process
- **Functionality Testing**: Test core server capabilities
- **Integration Testing**: Ensure compatibility with existing servers
- **Documentation Testing**: Validate setup instructions work correctly

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

## 3. MCP Project Structure

```
mcp-project-root/
├── CLAUDE.md              # This file: MCP project protocols
├── README.md              # Project overview and setup guide
├── .mcp.json              # Claude Code MCP server configuration
├── .gitignore             # Git exclusion patterns
├── servers/               # MCP server implementations and configs
│   ├── official/          # Official Anthropic/ModelContextProtocol servers
│   ├── community/         # Community-maintained servers
│   ├── custom/            # Project-specific custom servers
│   └── testing/           # Servers under evaluation
├── configs/               # Configuration templates and environments
│   ├── development.json   # Development environment config
│   ├── production.json    # Production environment config
│   └── templates/         # Configuration templates
├── docs/                  # MCP server documentation
│   ├── installation/      # Installation guides
│   ├── usage/             # Usage examples and tutorials
│   ├── troubleshooting/   # Common issues and solutions
│   └── server-catalog/    # Individual server documentation
├── scripts/               # Automation and utility scripts
│   ├── install-server.sh  # Server installation automation
│   ├── test-config.sh     # Configuration validation
│   └── update-servers.sh  # Server update automation
├── tests/                 # MCP server testing suites
│   ├── integration/       # Integration tests
│   ├── functionality/     # Functionality tests
│   └── performance/       # Performance tests
├── examples/              # Usage examples and demonstrations
├── templates/             # Project templates for MCP development
└── tools/                 # Development and analysis tools
```

---

## 4. MCP Git Workflow Protocol

### **MCP-Specific Branch Strategy**
```bash
# MCP server development branches
mcp-add-<server-name>-YYYYMMDD        # Adding new MCP servers
mcp-remove-<server-name>-YYYYMMDD     # Removing servers
mcp-test-<server-name>-YYYYMMDD       # Testing server functionality
mcp-update-<server-name>-YYYYMMDD     # Updating existing servers

# Configuration branches
config-mcp-<change-type>-YYYYMMDD     # MCP configuration updates
config-env-<environment>-YYYYMMDD     # Environment-specific configs

# Documentation branches
docs-server-<server-name>-YYYYMMDD    # Individual server documentation
docs-guide-<topic>-YYYYMMDD           # Guide creation/updates

# Research and analysis branches
research-mcp-<topic>-YYYYMMDD         # MCP ecosystem research
analysis-gap-<area>-YYYYMMDD          # Gap analysis work
```

### **MCP Commit Message Standards**
```bash
# MCP-specific commit types
mcp: add, remove, or modify MCP servers
config: .mcp.json and configuration changes
server: individual server modifications
test: MCP server testing
docs: MCP-related documentation

# Examples:
mcp: add github integration server to collection
config: update .mcp.json with database servers
server: improve sqlite-mcp error handling
test: validate filesystem server on windows
docs: create mcp server installation guide
research: analyze community mcp server patterns
```

### **Pre-Commit MCP Validation**
Before committing MCP changes:
1. **Validate Configuration**: `python -m json.tool .mcp.json`
2. **Test Server Installation**: Install/reinstall affected servers
3. **Verify Claude Code Integration**: Start Claude Code and test functionality
4. **Document Special Requirements**: Note any dependencies or setup steps
5. **Update Documentation**: Ensure docs reflect configuration changes

---

## 5. MCP Server Management Protocols

### **Server Addition Process**
1. **Research Phase**
   - Identify server capabilities and use cases
   - Verify server quality and maintenance status
   - Check compatibility with existing infrastructure
   - Document installation requirements

2. **Testing Phase**
   - Create testing branch: `mcp-test-<server-name>-YYYYMMDD`
   - Install server in isolated environment
   - Test core functionality and integration
   - Document any issues or special requirements

3. **Integration Phase**
   - Create integration branch: `mcp-add-<server-name>-YYYYMMDD`
   - Add server to appropriate configuration
   - Update documentation with server details
   - Test full configuration with all servers

4. **Documentation Phase**
   - Add server to catalog with capabilities description
   - Create usage examples if needed
   - Update installation guides
   - Document troubleshooting information

### **Server Configuration Management**
```json
// .mcp.json structure for different server types
{
  "mcpServers": {
    // Official servers (stable, well-maintained)
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "/allowed/path"],
      "category": "official"
    },

    // Community servers (community-maintained)
    "github": {
      "command": "npx",
      "args": ["-y", "@github/github-mcp-server"],
      "env": {"GITHUB_TOKEN": "your-token"},
      "category": "community"
    },

    // Custom servers (project-specific)
    "custom-analytics": {
      "command": "node",
      "args": ["./servers/custom/analytics-server.js"],
      "category": "custom"
    }
  }
}
```

### **Server Testing Framework**
```bash
# Basic server functionality test
./scripts/test-server.sh <server-name>

# Full configuration validation
./scripts/test-config.sh

# Integration test with Claude Code
./scripts/test-integration.sh
```

---

## 6. MCP Development Standards

### **Server Selection Criteria**
- **Functionality**: Addresses identified capability gaps
- **Quality**: Well-documented, actively maintained
- **Compatibility**: Works with existing MCP infrastructure
- **Performance**: Reasonable resource usage and response times
- **Community**: Active development and community support

### **Configuration Best Practices**
- **Path Management**: Use environment variables for paths when possible
- **Security**: Never commit sensitive tokens or credentials
- **Documentation**: Document all configuration options and requirements
- **Portability**: Ensure configurations work across development environments
- **Validation**: Include configuration validation in testing process

### **Documentation Requirements**
- **Server Catalog**: Maintain comprehensive list of all servers
- **Installation Guides**: Step-by-step setup instructions
- **Usage Examples**: Practical examples for each server
- **Troubleshooting**: Common issues and solutions
- **Integration Notes**: How servers work together

---

## 7. Memory Integration Protocols

### **Entity-Based MCP Project Tracking**
- **Use mcp__memory__** for persistent MCP development state across sessions
- **Create entities** for server implementations, configuration decisions, integration learnings
- **Cross-session continuity** through memory persistence and MCP knowledge graph evolution
- **Document relationships** between MCP servers and development decisions

### **MCP Development Memory Spaces**

**DEVELOPER Memory Entities**:
- **MCP Implementation Patterns**: Server templates, debugging solutions, testing frameworks
- **Configuration Discoveries**: Server setup insights, integration successes
- **Tool Chain Optimizations**: MCP workflow improvements, efficiency discoveries
- **Deployment Experiences**: Server deployment patterns, troubleshooting solutions

**RESEARCHER Memory Entities**:
- **MCP Ecosystem Analysis**: Server landscape assessments, technology comparisons
- **MCP Repository Evaluations**: Server quality assessments, implementation patterns
- **MCP Requirements Documentation**: Feasibility studies, specification development
- **MCP Competitive Analysis**: Feature mapping, gap identification

**ENGINEER Memory Entities**:
- **MCP Architecture Decisions**: Server design rationales, integration trade-offs
- **MCP Infrastructure Patterns**: Deployment strategies, configuration optimizations
- **MCP System Integration**: Multi-server coordination, protocol compliance insights
- **MCP Performance Assessments**: Server efficiency patterns, scalability considerations

**CREATIVE Memory Entities**:
- **MCP Innovation Processes**: Creative server ideation, innovative integration approaches
- **MCP Design Iterations**: Server interface evolution, creative problem-solving methods
- **MCP User Experience**: Creative workflow optimization, interface design insights
- **MCP Community Engagement**: Creative documentation, community building strategies

**HUMANIST Memory Entities**:
- **MCP Accessibility Analysis**: Inclusive design insights, accessibility considerations
- **MCP Ethical Evaluations**: Responsible development, ethical server deployment
- **MCP Social Impact Studies**: Community impact assessments, user welfare considerations
- **MCP Inclusive Design**: Universal access principles, diverse user needs

**TRANSLATOR Memory Entities**:
- **MCP Localization Projects**: Internationalization challenges, cultural adaptation
- **MCP Documentation Translation**: Multilingual documentation, cultural sensitivity
- **MCP Global Accessibility**: Cross-cultural server deployment, language support
- **MCP Cultural Adaptation**: Regional customization, localized user experiences

### **MCP Documentation Frequency Guidelines**

#### **MCP-Specific Documentation Patterns**
- **Server Context Determination**: Use `basename "$(pwd)"` + server name for identification
- **MCP Tagging Schema**: `#mcp-servers #server-type #integration #testing #deployment`
- **Auto-Compact Integration**: Monitor context window during complex MCP configurations
- **Development Intensity Adaptation**: Increase documentation during server integration phases

#### **MCP Documentation Triggers**
- **Server Addition/Removal**: Document server lifecycle changes and rationale
- **Configuration Updates**: Track .mcp.json changes and validation results
- **Integration Testing**: Document server compatibility and interaction patterns
- **Deployment Events**: Record deployment procedures and environment-specific configurations

---

## 8. Profile-Specific MCP Integration

### **RESEARCHER Profile Integration**
- **Documentation Servers**: Context7, documentation crawlers
- **Analysis Tools**: Data processing, research automation
- **Knowledge Management**: Memory systems, note-taking tools
- **Workflow**: Research-focused server configurations

### **ENGINEER Profile Integration**
- **Development Tools**: Git servers, build systems, deployment tools
- **System Integration**: API servers, database connectors
- **Architecture Tools**: Design documentation, system modeling
- **Workflow**: Engineering-focused server configurations

### **DEVELOPER Profile Integration**
- **Code Tools**: Filesystem, editor integrations, code analysis
- **Testing Tools**: Test runners, validation systems
- **Productivity Tools**: Task management, automation systems
- **Workflow**: Development-focused server configurations

---

## 9. MCP Workflow Enhancement & Learning System

### **Profile-Aware Enhancement Rules**

1. **Before Major Operations**: Check CLAUDE.md for profile-specific and general instructions for the task
2. **After Encountering Errors**: Document solution with profile context, develop prevention steps, and note cross-profile implications
3. **When Completing Tasks**: Reflect on profile workflow efficiency and identify knowledge gaps
4. **Cross-Profile Learning**: Share applicable improvements across MCP development workflows
5. **Review/Report**: Present improvement opportunities with profile-specific recommendations
6. **If Gaps Found and Approved**: Update CLAUDE.md with approved improvements

### **Review/Report Format**

When identifying improvement opportunities, present:

```
**Issue Identified**: [Brief description of MCP gap, error, or inefficiency with profile context]
**Proposed Solution**: [Specific CLAUDE.md addition or modification]
**Profile Impact**: [Which profiles benefit and how]
**Rationale**: [Why this would improve future MCP interactions]
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
2. **Immediate Resolution**: Fix the current MCP issue
3. **Prevention Documentation**: Add specific prevention guidelines to appropriate profile section
4. **Workflow Integration**: Update operational procedures for affected profiles
5. **Knowledge Persistence**: Ensure future sessions inherit the learning across profiles

### **Profile-Specific Learning Patterns**

**RESEARCHER Profile Learning**:
- MCP server discovery and evaluation methodologies
- MCP documentation quality assessment criteria
- MCP ecosystem analysis optimization
- MCP requirements gathering improvement patterns

**ENGINEER Profile Learning**:
- MCP architecture decision patterns and trade-offs
- MCP integration complexity patterns and solutions
- MCP deployment configuration optimization techniques
- MCP infrastructure automation enhancements

**DEVELOPER Profile Learning**:
- MCP implementation workflow optimizations
- MCP testing framework and validation approaches
- MCP tool chain efficiency improvements
- MCP deployment automation refinements

**CREATIVE Profile Learning**:
- MCP creative problem-solving and innovation patterns
- MCP user experience design optimization
- MCP workflow automation and creative solutions
- MCP community engagement and documentation creativity

**HUMANIST Profile Learning**:
- MCP accessibility and inclusive design patterns
- MCP ethical development and responsible deployment
- MCP user impact assessment and human-centered design
- MCP community building and social responsibility

**TRANSLATOR Profile Learning**:
- MCP internationalization and localization patterns
- MCP multilingual documentation optimization
- MCP cross-cultural deployment strategies
- MCP global accessibility and language support

### **Self-Reflection Checkpoints**

After completing significant MCP tasks, evaluate by profile:
- **Efficiency**: Were there profile-specific MCP workflow bottlenecks or redundancies?
- **Knowledge Gaps**: What profile-specific MCP information would have accelerated the work?
- **Tool Usage**: Could different MCP tools or approaches have been better for this profile?
- **Documentation Quality**: Are profile-specific MCP instructions clear and complete?
- **Pattern Recognition**: What MCP patterns emerge that should be systematized for this profile?
- **Cross-Profile Dependencies**: What MCP learnings should be shared with other profiles?

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

### **MCP Error Prevention Protocol**
- **Configuration Validation**: Always validate .mcp.json before committing changes
- **Server Testing**: Systematic testing of server functionality before integration
- **Compatibility Verification**: Check server compatibility with existing MCP infrastructure
- **Documentation Synchronization**: Keep server documentation current with implementations

---

## 10. MCP Automation & CI/CD

### **Automated Testing**
```yaml
# Basic MCP validation workflow
name: MCP Configuration Validation
on: [push, pull_request]
jobs:
  validate-mcp:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Validate MCP Configuration
      run: |
        # Validate .mcp.json syntax
        python -m json.tool .mcp.json
        # Test server installation (if possible)
        ./scripts/test-config.sh
```

### **Server Update Automation**
- **Dependency Monitoring**: Track server version updates
- **Automated Testing**: Test updates before integration
- **Configuration Sync**: Keep configurations current across environments

---

## 11. MCP Troubleshooting Guide

### **Common Configuration Issues**
- **JSON Syntax Errors**: Use `python -m json.tool .mcp.json` to validate
- **Path Problems**: Ensure all paths are accessible and correct
- **Permission Issues**: Check file permissions for server executables
- **Port Conflicts**: Verify no port conflicts between servers

### **Server Connection Problems**
- **Installation Issues**: Verify server packages are installed correctly
- **Dependency Problems**: Check that all server dependencies are met
- **Environment Variables**: Ensure required environment variables are set
- **Network Issues**: Check firewall and network connectivity

### **Performance Issues**
- **Memory Usage**: Monitor server memory consumption
- **Response Times**: Test server response performance
- **Resource Conflicts**: Check for resource conflicts between servers
- **Load Management**: Monitor server load and capacity

---

## 12. MCP Project Evolution

### **Protocol Updates**
When updating MCP configurations:
1. **Test in Development**: Always test changes in development first
2. **Document Changes**: Update this file and server documentation
3. **Version Control**: Commit changes with clear descriptions
4. **Validate Integration**: Ensure changes don't break existing functionality

### **Server Ecosystem Evolution**
Track and adapt to MCP ecosystem changes:
- **New Server Discovery**: Regular research for new useful servers
- **Deprecation Management**: Handle deprecated or abandoned servers
- **Community Contributions**: Consider contributing improvements back
- **Best Practice Updates**: Incorporate community best practices

### **Lessons Learned**

#### 2025-09-18: Community Research Integration
- **Context**: Analyzed 39 local CLAUDE.md files and top GitHub MCP repositories
- **Solution**: Integrated community patterns into project structure and protocols
- **Impact**: Project now aligns with established community best practices
- **Application**: Use community-validated patterns for future MCP development

---

## 13. MCP Resources & Community

### **Official Resources**
- [Model Context Protocol Documentation](https://modelcontextprotocol.org)
- [Official MCP Server Repository](https://github.com/modelcontextprotocol/servers)
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Python SDK](https://github.com/modelcontextprotocol/python-sdk)

### **Community Resources**
- [MCP Registry](https://mcpez.com)
- [Open MCP Directory](https://openmcpdirectory.com)
- [MCP Catalog](https://mcpcatalog.io)

### **Key Community Projects**
- [centminmod/my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup)
- [GWUDCAP/cc-sessions](https://github.com/GWUDCAP/cc-sessions)
- [oxygen-fragment/claude-modular](https://github.com/oxygen-fragment/claude-modular)

---

_Claude, always follow this MCP-specific protocol when working on MCP server development. Test all server changes thoroughly and maintain comprehensive documentation for future reference._

**Template Version**: 1.0
**Compatible with**: Enhanced Git Workflow Protocol v1.0
**MCP Integration**: Full support for MCP server development lifecycle
**Profile Support**: DEVELOPER + ENGINEER focused
**Last Review**: 2025-09-20