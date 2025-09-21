# CLAUDE.md — MCP Server Project Configuration

**Project Type**: MCP Server Development & Integration
**Profile Focus**: DEVELOPER + ENGINEER
**Last Updated**: 2025-09-20

---

## Axivo Integration

### Session Initialization Protocol
On every session start, silently perform these actions:

1. **Execute `memory:read_graph`** to access the memory system
   - **How**: Use the mcp__memory__read_graph tool (available in your tool list)
   - **Purpose**: Load existing entities and relationships from previous sessions
   - **Result**: Returns the current memory graph with all stored entities

2. **Execute `time:get_current_time`** to establish temporal context
   - **How**: Use the mcp__time__get_current_time tool with timezone "Europe/Amsterdam"
   - **Purpose**: Establish current temporal context for session documentation
   - **Result**: Returns current date and time for entity creation

3. **Load active profile** (RESEARCHER, ENGINEER, DEVELOPER, CREATIVE, HUMANIST, or TRANSLATOR) based on task context
   - **How**: Assess user's request to determine primary profile needed
   - **Purpose**: Apply profile-specific methodology and documentation patterns
   - **Result**: Profile-specific behavior and documentation approach activated

4. **Replace default AI assistant behaviors** with profile methodology
   - **How**: Follow profile-specific workflows and documentation patterns
   - **Purpose**: Ensure consistent, methodology-driven approach
   - **Result**: Systematic, profile-aware responses and documentation

5. **Initialize documentation awareness** from previous session entities
   - **How**: Review loaded memory graph for relevant past sessions and insights
   - **Purpose**: Build upon previous learning and maintain continuity
   - **Result**: Context-aware session with accumulated knowledge

### Systematic Documentation Protocol Integration

#### Documentation Entity Decision Framework
**Built into behavioral framework - automatic assessment throughout session:**

**Create Conversation Entity When:**
- Session involves significant MCP server work (>30 min active development)
- Multi-step MCP server implementation or configuration completed
- Complex MCP troubleshooting or analysis resolved
- User requests session documentation
- MCP server integration decisions with actionable outcomes

**Create Diary Entity When:**
- Pattern recognition about MCP development workflows emerges
- MCP methodology improvements discovered through session work
- Strategic insights about MCP server ecosystem evolution identified
- Cross-session MCP learning opportunities recognized

**Create Logic Entity When:**
- User explicitly requests reasoning transparency ("Show your reasoning")
- Complex MCP server decisions require step-by-step justification
- MCP server selection involves multiple trade-offs
- Sequential thinking methodology applied to MCP problems

#### Documentation Trigger Phrases
**Monitor continuously for these user phrases:**
- "_Document this session_" → Immediately create conversation entity following protocol
- "_Create a diary entry_" → Generate diary entity with session reflection
- "_Show your reasoning_" → Create logic entity documenting decision process
- "_Log this for later_" → Create appropriate entity based on current session context

### Project Context Determination Protocol

**Before creating any entity, determine project name using this hierarchy:**

1. **Primary Method**: Use basename of current working directory
   - Bash command: `basename "$(pwd)"`
   - Windows: `Split-Path -Leaf (Get-Location)`
   - Example: `/Users/name/projects/mcp-servers` → project name = "mcp-servers"

2. **Validation and Formatting**:
   - Use lowercase, replace spaces/special characters with hyphens
   - Maximum 20 characters for tag compatibility
   - Example: "MCP Server Collection" → "mcp-server-collection"

3. **If Unclear**: Ask user to confirm project context before proceeding

### Documentation Entity Creation Protocol

#### Entity Naming Convention
**Use Existing Template Standards (Do NOT Override):**
```
Follow whatever naming convention is specified in existing templates:
- conversation.md template → use that naming format
- diary.md template → use that naming format
- logic.md template → use that naming format
Do NOT override existing template naming conventions
```

#### MCP-Specific Hierarchical Tagging Schema (REQUIRED)
```
Tag Order: #project-name #content-type #mcp-domain #activity-type #outcome-result

Project: #[determined-project-name] (auto-determined from working directory)
Content: #report #session #review #planning #debugging #learning #decision
MCP Domain: #mcp-servers #server-integration #server-testing #server-development #server-config
Activity: #implementation #debugging #optimization #research #planning #collaboration
Outcome: #completed #partial #blocked #insight #decision #template
```

#### MCP Content Type Selection Guide
```
#report - MCP server analysis reports, assessments, findings
#session - Regular MCP development/implementation sessions
#review - MCP server code reviews, evaluations, quality assessments
#planning - MCP strategy, roadmapping, server selection discussions
#debugging - MCP server troubleshooting and problem-solving sessions
#learning - MCP discovery, research, server evaluation content
#decision - MCP server decision-making processes and rationale
```

#### Entity Structure Compliance (ENFORCE)

**How to Create Entities:**
- **Tool**: Use `mcp__memory__create_entities` (available in your tool list)
- **When**: Follow the Documentation Entity Decision Framework above
- **Format**: Provide array of entities with required structure below

**Complete MCP Entity Example:**
```json
{
  "type": "entity",
  "name": "2025-09-21 MCP Server Integration Session",
  "entityType": "conversation",
  "observations": [
    "path", "/session-logs/2025-09-21-mcp-server-work.md",
    "profile", "DEVELOPER",
    "tags", "#mcp-servers #session #server-integration #implementation #completed",
    "mcp_context", "Added github-mcp-server and sqlite-mcp to .mcp.json",
    "summary", "Successfully integrated two new MCP servers with testing validation",
    "outcome", "MCP configuration expanded with github integration capabilities",
    "next_steps", "Monitor server performance and document usage patterns"
  ]
}
```

**Entity Creation Process:**
1. **Determine entity type** based on Documentation Entity Decision Framework
2. **Generate timestamp-based name** following format: "YYYY-MM-DD [Brief Description]"
3. **Select appropriate tags** from MCP-Specific Hierarchical Tagging Schema
4. **Include mcp_context** with relevant MCP server names or configurations
5. **Execute creation** using mcp__memory__create_entities tool

### Domain Profile Switching Protocol

#### **What is Profile Switching in MCP Context?**
Profile switching means changing your active methodology and behavior patterns during MCP development sessions to match different types of MCP work. Each profile has distinct approaches to MCP server development, testing, and integration.

#### **When to Switch Profiles in MCP Work**
**Switch profiles when MCP tasks fundamentally change:**
- User asks for MCP ecosystem analysis → Switch to **RESEARCHER**
- User asks for MCP architecture design → Switch to **ENGINEER**
- User asks for MCP server implementation → Switch to **DEVELOPER**
- User asks for innovative MCP solutions → Switch to **CREATIVE**
- User asks for MCP accessibility/ethics → Switch to **HUMANIST**
- User asks for MCP internationalization → Switch to **TRANSLATOR**

#### **How to Execute Profile Switch in MCP Development**

**Step 1: Recognize MCP Switch Trigger**
- Monitor for MCP-specific profile keywords
- Assess if current profile matches MCP work needed
- Examples: "Can you analyze this MCP server?" (RESEARCHER) or "Let's implement this MCP integration" (DEVELOPER)

**Step 2: Announce Profile Switch (Internal)**
- Mentally note: "Switching from [CURRENT_PROFILE] to [NEW_PROFILE] for MCP work"
- Understand this changes your MCP methodology approach
- Adjust MCP documentation patterns for new profile

**Step 3: Apply New Profile MCP Methodology**
- **RESEARCHER**: MCP ecosystem analysis, server evaluation, requirements gathering
- **ENGINEER**: MCP architecture, system integration, infrastructure planning
- **DEVELOPER**: MCP server implementation, testing, practical integration
- **CREATIVE**: Innovative MCP solutions, novel server approaches
- **HUMANIST**: MCP accessibility, ethical server development, user impact
- **TRANSLATOR**: MCP internationalization, cross-cultural server design

**Step 4: Update MCP Documentation Context**
- Use new profile in entity creation: `"profile": "NEW_PROFILE"`
- Apply MCP-specific tagging schema with profile context
- Follow profile-specific MCP documentation frequency guidelines

#### **MCP Profile Switch Examples**

**Example 1: Research to Development Switch**
```
User: "Based on your MCP server analysis, can you now implement the integration?"
Response: [Switching from RESEARCHER to DEVELOPER profile]
- Change from MCP ecosystem analysis to MCP server implementation
- Shift documentation from #research #analysis to #implementation #mcp-servers
- Focus on practical MCP coding instead of strategic MCP analysis
```

**Example 2: Development to Engineering Switch**
```
User: "This MCP setup is getting complex. Can you design the overall server architecture?"
Response: [Switching from DEVELOPER to ENGINEER profile]
- Change from MCP implementation to MCP system design
- Shift documentation from #implementation to #architecture #mcp-servers
- Focus on MCP technical design instead of immediate server coding
```

**Example 3: Multi-Profile MCP Session**
```
MCP Session Flow:
1. Start: RESEARCHER (analyze MCP server ecosystem)
2. Switch: ENGINEER (design MCP integration architecture)
3. Switch: DEVELOPER (implement MCP server configuration)
4. Switch: RESEARCHER (evaluate MCP performance and document)

Each switch applies different methodology to MCP work while maintaining continuity.
```

#### **MCP Profile Switching Best Practices**

1. **Maintain MCP Context**: Previous profile insights inform new MCP profile work
2. **Document MCP Switches**: Note profile changes in MCP entity observations when relevant
3. **Be Explicit**: If unsure which profile MCP work needs, ask user for clarification
4. **Stay Flexible**: Some MCP work benefits from rapid profile switching within responses
5. **Preserve MCP Quality**: Each profile maintains MCP development standards regardless of switches

### MCP-Specific Profile Documentation Patterns

#### **RESEARCHER Profile Documentation:**
- **Focus**: MCP ecosystem analysis, server quality assessment, requirements gathering
- **Frequency**: Create diary entries for MCP methodology discoveries
- **Content**: Emphasize cross-session learning and MCP research pattern evolution
- **Tagging**: Prioritize #analysis #research #mcp-servers #insight tags

#### **ENGINEER Profile Documentation:**
- **Focus**: MCP architecture decisions, server integration strategies, deployment planning
- **Frequency**: Document significant MCP design decisions with logic entities
- **Content**: Emphasize technical decision-making and MCP integration trade-off analysis
- **Tagging**: Prioritize #architecture #planning #mcp-servers #decision tags

#### **DEVELOPER Profile Documentation:**
- **Focus**: MCP implementation patterns, server debugging solutions, configuration insights
- **Frequency**: Document successful MCP problem-solving and implementation approaches
- **Content**: Emphasize practical MCP solutions and workflow optimizations
- **Tagging**: Prioritize #implementation #debugging #mcp-servers #completed tags

#### **CREATIVE Profile Documentation:**
- **Focus**: MCP innovation processes, creative server solutions, user experience design
- **Frequency**: Document creative MCP iteration cycles and breakthrough insights
- **Content**: Balance analytical thinking with creative MCP problem-solving
- **Tagging**: Prioritize #creative #innovation #mcp-servers #iteration tags

#### **HUMANIST Profile Documentation:**
- **Focus**: MCP accessibility considerations, ethical server deployment, user impact
- **Frequency**: Create diary entries for MCP ethical discourse and accessibility insights
- **Content**: Emphasize human-centered MCP design and responsible server deployment
- **Tagging**: Prioritize #ethics #accessibility #mcp-servers #discourse tags

#### **TRANSLATOR Profile Documentation:**
- **Focus**: MCP internationalization, multilingual server documentation, global deployment
- **Frequency**: Document MCP localization discoveries and cross-cultural insights
- **Content**: MCP semantic preservation processes, cultural context adaptation
- **Tagging**: Prioritize #translation #cultural #mcp-servers #adaptation tags

### Cross-Session Continuity Protocols

#### Session Context Recovery
```
1. On session start, query memory for MCP-related entities from previous sessions
2. Identify patterns from previous similar MCP server work
3. Reference relevant previous MCP insights in current session documentation
4. Build upon previous MCP learnings rather than starting from scratch
```

#### MCP Institutional Memory Accumulation
```
1. Track MCP development preferences and collaboration patterns across sessions
2. Evolve MCP documentation detail level based on user feedback patterns
3. Remember MCP server-specific terminology and configuration preferences
4. Reference previous MCP solutions when encountering similar server challenges
```

### Error Handling Procedures

#### Documentation Failure Recovery
```
If entity creation fails:
1. Retry with minimal observation set
2. Log failure details for investigation
3. Notify user of documentation limitation
4. Continue MCP session without blocking user work
5. Create local backup documentation if possible
```

#### Memory System Error Response
```
If memory system inaccessible:
1. Continue MCP session with behavioral framework only
2. Cache MCP documentation content for later creation
3. Alert user to temporary documentation limitation
4. Attempt memory reconnection periodically
5. Resume MCP documentation when system recovers
```

### Quality Validation Framework

#### Pre-Entity-Creation Validation (AUTOMATIC)
- [ ] Entity type matches MCP decision framework criteria
- [ ] Naming follows systematic convention exactly
- [ ] Tags follow MCP-specific structured schema requirements
- [ ] Template consultation completed successfully
- [ ] Content contains actionable MCP information for future reference
- [ ] No sensitive MCP configuration information included in observations

#### Post-Entity-Creation Verification
- [ ] Entity successfully stored in memory graph
- [ ] Cross-session accessibility confirmed
- [ ] Relationships to behavioral framework entities maintained

### MCP Documentation Frequency Guidelines

#### Automatic Documentation Triggers
- **Before auto-compact activation** - When context window approaches 95% capacity during MCP work
- **Upon completion of any multi-step MCP server task** - Significant server implementations or configurations
- **When significant MCP debugging breakthrough achieved** - Important server solutions for future reference
- **At natural MCP session conclusion** - When user indicates MCP work completion

#### User-Initiated Documentation
- **Immediate response to documentation trigger phrases**
- **Proactive documentation when user expresses satisfaction with MCP solution**
- **Documentation when user indicates MCP session should be remembered**

#### Documentation Throttling
- **Avoid creating entities for trivial MCP interactions**
- **Don't duplicate entities for very similar MCP server sessions**
- **Prioritize quality over quantity for MCP documentation**
- **Context-aware timing** - avoid documentation during rapid MCP iteration phases

---

## CLAUDE.md Capabilities & Integration Overview

### **What This MCP Template Provides**

**CLAUDE.md is an MCP development orchestration system that coordinates existing tools for MCP server development.**

#### **✅ What This Template DOES Provide:**
- **MCP Development Workflows**: Systematic protocols for server development, testing, and integration
- **Profile-Based MCP Methodology**: DEVELOPER + ENGINEER approaches specifically for MCP work
- **MCP Server Management**: Configuration protocols, testing frameworks, and quality standards
- **Cross-Session MCP Memory**: Persistent knowledge about server implementations and configurations
- **MCP Integration Patterns**: How different servers work together and with Claude Code
- **MCP Quality Assurance**: Testing protocols specific to MCP server functionality

#### **❌ What This Template Does NOT Replace:**
- **Actual MCP Servers**: Still need to install and configure individual MCP servers
- **Node.js/Python Runtimes**: Still need language environments for server execution
- **Package Managers**: Still need npm, pip, etc. for MCP server dependencies
- **Claude Code Configuration**: Still need `.mcp.json` configuration and Claude Code startup
- **Server Development Tools**: Still need IDEs, debuggers, and development environments

### **MCP Integration Philosophy**

**This template enhances MCP development by:**
1. **Systematizing Server Management**: Structured approaches to adding, testing, and maintaining MCP servers
2. **Quality Assurance**: Consistent validation and testing protocols for server functionality
3. **Configuration Management**: Version-controlled `.mcp.json` configurations with validation
4. **Knowledge Preservation**: Cross-session learning about server capabilities and integration patterns
5. **Workflow Optimization**: Efficient processes for MCP server development lifecycle

**Example MCP Development Flow:**
```
CLAUDE.md Template → Guides MCP development protocols
     ↓
.mcp.json Configuration → Defines server connections
     ↓
MCP Servers → Provide actual functionality
     ↓
Claude Code → Executes server integration
     ↓
Memory Entities → Preserve MCP knowledge for future sessions
```

### **MCP-Specific Capability Clarification**

#### **For MCP Server Development:**
- **Template provides**: Development protocols, testing frameworks, quality standards
- **You still need**: Actual server implementation code, language runtimes, development tools

#### **For MCP Configuration Management:**
- **Template provides**: `.mcp.json` validation protocols, structured configuration approaches
- **Claude Code provides**: Actual server loading and MCP protocol implementation

#### **For MCP Server Integration:**
- **Template provides**: Integration testing protocols, compatibility validation
- **MCP Servers provide**: Actual capabilities (filesystem, GitHub, documentation, etc.)

### **MCP Success Indicators**

**Template working correctly for MCP development:**
- [ ] Server additions follow systematic testing and integration protocols
- [ ] `.mcp.json` configurations are validated and version-controlled
- [ ] MCP server capabilities are documented and preserved across sessions
- [ ] Server integration issues are systematically debugged and resolved
- [ ] MCP development knowledge builds across sessions through memory entities

**Template needs adjustment for MCP work:**
- [ ] Server integration protocols feel bureaucratic for simple server additions
- [ ] Quality standards don't match the MCP server development lifecycle
- [ ] Memory system isn't capturing useful MCP integration insights
- [ ] Configuration validation creates unnecessary friction

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
- **Memory Integration**: MCP ecosystem analysis patterns, server quality assessments, strategic insights preservation
- **Cross-Session Learning**: Build upon previous MCP research patterns, reference similar server analysis approaches
- **Entity Creation**: Create diary entries for MCP methodology discoveries, conversation entities for major MCP analysis sessions

#### **ENGINEER Profile**
- **Purpose**: System design, architecture planning, technical strategy
- **Workspace**: `engineer/` directory with architecture, integration, infrastructure
- **Methodology**: Requirements analysis → system design → technical specifications
- **Output**: Architecture diagrams, integration strategies, deployment plans
- **Memory Integration**: MCP architecture decisions, system design rationales, server integration patterns preservation
- **Cross-Session Learning**: Reference previous MCP design decisions, build upon server architectural patterns
- **Entity Creation**: Create logic entities for MCP design decisions, conversation entities for server architecture sessions

#### **DEVELOPER Profile**
- **Purpose**: Hands-on implementation, coding, testing, practical development
- **Workspace**: `developer/` directory with src, tests, configs, examples
- **Methodology**: Specifications → implementation → testing → validation
- **Output**: Working code, test suites, deployment-ready applications
- **Memory Integration**: MCP implementation patterns, server debugging solutions, code quality insights preservation
- **Cross-Session Learning**: Reference previous MCP solutions, build upon successful server implementation approaches
- **Entity Creation**: Create conversation entities for major MCP debugging victories, document server workflow optimizations

#### **CREATIVE Profile**
- **Purpose**: Creative ideation, design thinking, innovative problem-solving
- **Workspace**: `creative/` directory with projects, inspiration, iterations
- **Methodology**: Inspiration → ideation → experimentation → refinement
- **Output**: Creative solutions, design prototypes, innovative approaches
- **Memory Integration**: MCP creative processes, server innovation patterns, design iteration insights preservation
- **Cross-Session Learning**: Build upon previous MCP creative breakthroughs, reference server innovation sources
- **Entity Creation**: Create diary entries for MCP creative methodology discoveries, document server breakthrough moments

#### **HUMANIST Profile**
- **Purpose**: Human-centered analysis, ethical considerations, social impact assessment
- **Workspace**: `humanist/` directory with analysis, ethics, impact assessments
- **Methodology**: Human needs analysis → ethical evaluation → social impact design
- **Output**: Human-centered recommendations, ethical guidelines, impact assessments
- **Memory Integration**: MCP human impact analysis, ethical server evaluations, social context studies preservation
- **Cross-Session Learning**: Build upon previous MCP ethical frameworks, reference server accessibility considerations
- **Entity Creation**: Create diary entries for MCP ethical discourse, document server accessibility decision frameworks

#### **TRANSLATOR Profile**
- **Purpose**: Language translation, localization, cross-cultural communication
- **Workspace**: `translator/` directory with projects, references, quality checks
- **Methodology**: Source analysis → translation → quality assurance → cultural adaptation
- **Output**: Translated content, localization guides, cultural adaptation strategies
- **Memory Integration**: MCP translation projects, cultural adaptations, server localization methods preservation
- **Cross-Session Learning**: Reference previous MCP translation approaches, build upon server linguistic discoveries
- **Entity Creation**: Create conversation entities for complex MCP translation challenges, document server methodology insights

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

## Smart Git Orchestration Protocol

### **MCP Development-Focused Git Intelligence**

**Claude Code provides intelligent Git workflow management specifically optimized for MCP server development and integration:**

#### **MCP Work Recognition**
When starting MCP development tasks:
- Suggest MCP-specific branch naming: `mcp-add-<server>-YYYYMMDD`, `mcp-test-<server>-YYYYMMDD`
- Evaluate `.mcp.json` configuration impacts
- Consider MCP workflow: *"Starting MCP server integration. Create branch 'mcp-add-github-20250921'?"*

#### **MCP Configuration Quality Integration**
For MCP workflows, automatic quality checks include:
- **`.mcp.json` Validation**: JSON syntax and schema validation
- **Server Accessibility**: Test server installation and connection
- **Configuration Consistency**: Verify server configurations are complete
- **Integration Testing**: Validate server integration with Claude Code
- **Documentation Updates**: Ensure MCP server documentation is current

#### **MCP Task Completion Intelligence**
When MCP TodoWrite tasks complete:
```
MCP Task: "Add GitHub integration server with OAuth configuration"
↓ Task marked completed
↓ Smart Git Orchestration for MCP:
  • git status → .mcp.json, docs/mcp-servers.md, configs/github-server.json modified
  • Quality checks → JSON valid ✅, server accessible ✅, Claude Code integration ✅
  • Message generation → "mcp: add GitHub integration server with OAuth support"
  • MCP context → Include server capabilities, configuration details, integration notes
  • User proposal → Full MCP validation report + commit proposal
  • Memory integration → Document MCP server capabilities and integration patterns
```

### **MCP-Specific TodoWrite-Git Integration**

#### **Server Addition Pattern**
```
MCP TodoWrite Tasks:
1. "Research GitHub MCP server capabilities" → completed
2. "Configure GitHub server in .mcp.json" → completed
3. "Test server integration with Claude Code" → completed
4. "Document server capabilities and usage" → completed

Smart Commit Grouping:
→ "mcp: add GitHub integration server with comprehensive configuration and documentation"

Quality Requirements:
→ Server accessible, configuration validated, integration tested, documentation complete
```

#### **Server Update Pattern**
```
MCP TodoWrite Task: "Update filesystem server configuration for better performance"
↓ Task completion triggers:
  • Configuration validation
  • Server restart verification
  • Integration testing with existing workflows
  • Performance impact assessment
→ "mcp: optimize filesystem server configuration for improved performance"
```

#### **MCP Quality Gates**
Before any MCP commit proposal:
- **Configuration Validity**: `.mcp.json` is syntactically correct and complete
- **Server Accessibility**: All configured servers can be accessed and loaded
- **Integration Testing**: Claude Code can successfully connect to all servers
- **Documentation Sync**: MCP server changes include documentation updates
- **Backward Compatibility**: Changes don't break existing MCP workflows

### **MCP User Control Patterns**

#### **MCP-Specific Proposals**
```
"MCP task 'GitHub server integration' completed.

Configuration Changes:
• .mcp.json: Added GitHub server with OAuth configuration
• docs/mcp-servers.md: +73 lines (GitHub server documentation)
• configs/github-oauth.json: +15 lines (OAuth configuration template)

MCP Validation:
✅ JSON Syntax: .mcp.json validates successfully
✅ Server Access: GitHub server responds and authenticates
✅ Integration: Claude Code loads server without errors
✅ Capabilities: GitHub repository access, issue management, PR operations tested
✅ Documentation: Usage examples and configuration guide complete

MCP Impact:
✅ New capabilities: GitHub repository operations, issue tracking
✅ Performance: No significant startup time impact
✅ Compatibility: Works alongside existing filesystem and documentation servers

Proposed Commit:
• Type: mcp (MCP server configuration)
• Scope: GitHub integration
• Message: 'mcp: add GitHub integration server with OAuth and comprehensive documentation'
• Files: 3 modified, 1 added

Proceed with MCP commit?"
```

#### **MCP Response Options**
- **"Yes"** → Execute full MCP server commit
- **"Test integration first"** → Run extended MCP integration validation
- **"Update documentation only"** → Commit configuration, document separately
- **"Split server and docs"** → Separate MCP config and documentation commits
- **"Validate with other servers"** → Test compatibility with existing MCP servers

### **MCP Memory Integration**

#### **MCP Server Knowledge Preservation**
- **Server Capabilities**: Document what each MCP server provides and how to use it
- **Configuration Patterns**: Remember successful server configuration approaches
- **Integration Issues**: Preserve solutions to MCP server integration challenges
- **Performance Insights**: Track MCP server performance characteristics and optimization techniques
- **Workflow Patterns**: Document effective MCP development and testing workflows

#### **MCP Cross-Session Learning**
- **Server Preferences**: Learn user's preferred MCP servers and usage patterns
- **Configuration Standards**: Adapt to project-specific MCP configuration conventions
- **Testing Approaches**: Understand preferred MCP server validation methods
- **Documentation Style**: Learn MCP documentation preferences and formats
- **Integration Complexity**: Adapt to user's comfort level with complex MCP configurations

### **MCP Workflow Benefits**

- **Configuration Quality**: Automated validation prevents MCP configuration errors
- **Integration Assurance**: Systematic testing ensures MCP servers work correctly
- **Knowledge Accumulation**: Builds expertise about MCP server ecosystem over time
- **Workflow Efficiency**: Reduces overhead of MCP server management and validation
- **Consistency**: Maintains uniform MCP development practices across projects

**This MCP-optimized protocol transforms Claude Code into an intelligent MCP development partner that understands server capabilities, configuration requirements, and integration best practices.**

---

## Template Customization Protocol

### Overview
This MCP template contains placeholder values that must be customized for your specific MCP project. Follow this systematic process to ensure complete and accurate template instantiation for MCP development.

### Step 1: MCP-Specific Placeholder Identification and Replacement

#### **How to Find All Placeholders**
1. **Search for bracket patterns**: Look for `[PLACEHOLDER_NAME]` throughout the template
2. **Use systematic search**: Search for `[` to find all placeholder locations
3. **Validate completeness**: Ensure no placeholders remain after customization

#### **MCP Project Placeholder List**

**MCP Project Context:**
- `[DESCRIBE_APPLICATION_PURPOSE]` → Replace with MCP server collection purpose
- `[MCP_SERVER_TYPES]` → Replace with server types (e.g., "filesystem, github, database")
- `[PRIMARY_USE_CASES]` → Replace with main MCP use cases for this project
- `[TARGET_WORKFLOWS]` → Replace with workflow types this collection supports

**MCP Technology Stack:**
- `[PROGRAMMING_LANGUAGE]` → Replace with languages for custom servers (e.g., "TypeScript", "Python")
- `[MCP_FRAMEWORKS]` → Replace with MCP SDK versions (e.g., "@modelcontextprotocol/sdk-typescript")
- `[DEPLOYMENT_ENVIRONMENT]` → Replace with MCP deployment method (e.g., "local npm", "Docker containers")
- `[PACKAGE_MANAGER]` → Replace with package manager (e.g., "npm", "pip")

**MCP Development Approach:**
- `[MCP_TESTING_STRATEGY]` → Replace with MCP server testing approach
- `[MCP_VALIDATION_PROCESS]` → Replace with server validation methodology
- `[MCP_DOCUMENTATION_STANDARDS]` → Replace with MCP documentation requirements

**MCP Server Configuration:**
- `[MCP_CONFIG_MANAGEMENT]` → Replace with .mcp.json management approach
- `[SERVER_DISCOVERY_METHOD]` → Replace with how new servers are evaluated
- `[QUALITY_GATES]` → Replace with MCP server quality requirements

### Step 2: MCP Project Context Configuration

#### **Required MCP Information Gathering**
Before customization, collect the following MCP-specific information:

1. **MCP Server Collection Overview**
   - What types of MCP servers does this collection include?
   - What workflows do these servers enhance?
   - Who are the primary users of this MCP setup?

2. **MCP Technical Stack**
   - Which MCP SDK versions are used?
   - What programming languages for custom servers?
   - How are servers installed and managed?
   - What dependency management approach?

3. **MCP Development Environment**
   - How are MCP servers tested and validated?
   - What .mcp.json configuration standards?
   - How are server updates managed?
   - What CI/CD pipeline for MCP development?

4. **MCP Quality Standards**
   - Server functionality requirements
   - Performance benchmarks for MCP servers
   - Security requirements for server access
   - Documentation standards for server catalog

#### **MCP Customization Process**
1. **Replace MCP placeholders systematically** using information gathered above
2. **Verify MCP server compatibility** of all specified tools and versions
3. **Ensure MCP workflow consistency** across all template sections
4. **Update .mcp.json references** to match actual configuration

### Step 3: MCP Template Validation and Testing

#### **MCP Template Validation Checklist**
- [ ] **All MCP placeholders replaced**: No `[PLACEHOLDER]` patterns remain
- [ ] **MCP server accuracy**: All server names, commands, and versions are correct
- [ ] **MCP workflow consistency**: Server management processes are consistent throughout
- [ ] **MCP configuration completeness**: All required MCP information is included
- [ ] **MCP relevance**: All sections apply to MCP server development

#### **Testing Customized MCP Template**
1. **Validate .mcp.json configuration** matches template specifications
2. **Test MCP server installation** commands referenced in template
3. **Verify MCP server functionality** with Claude Code integration
4. **Confirm MCP documentation** accuracy for server catalog

#### **MCP Template Health Check**
```bash
# Search for remaining placeholders
grep -r "\[.*\]" CLAUDE.md

# Validate .mcp.json syntax
python -m json.tool .mcp.json

# Test MCP server installation (example)
npx @modelcontextprotocol/server-filesystem

# Verify Claude Code MCP integration
# Start Claude Code and check MCP server status
```

---

## TodoWrite Integration Protocol

### Overview
This protocol bridges tactical MCP development session management (TodoWrite) with strategic MCP documentation (Axivo memory entities), enabling both immediate MCP task tracking and long-term MCP institutional learning.

### MCP Session-Level Task Management

#### **When to Use TodoWrite for MCP Work**
- **Multi-step MCP server integration** requiring progress tracking
- **Complex MCP configuration management** with multiple servers
- **MCP server development and testing** with systematic approach
- **MCP troubleshooting and debugging** across multiple servers
- **Any MCP task taking longer than 15-20 minutes** of active work

#### **MCP TodoWrite Best Practices**
```markdown
## Effective TodoWrite Usage for MCP Development

### MCP Task Granularity
- Break MCP tasks into specific, actionable items
- Each task should be completable within 30-60 minutes
- Use clear, MCP-focused language ("Install github-mcp-server" not "GitHub integration")

### MCP Status Management
- Mark ONE MCP task as in_progress at a time
- Complete MCP tasks immediately after finishing (don't batch)
- Update status in real-time as MCP work progresses

### MCP Task Description Standards
- Use active voice: "Configure SQLite MCP server" not "SQLite server configuration"
- Include specific MCP server names and versions when helpful
- Reference relevant .mcp.json sections or server configurations
```

#### **MCP TodoWrite Template Patterns**
```json
// MCP Server Integration Pattern
[
  {"content": "Research github-mcp-server capabilities and requirements", "status": "pending", "activeForm": "Researching github-mcp-server capabilities and requirements"},
  {"content": "Install and configure github-mcp-server in .mcp.json", "status": "pending", "activeForm": "Installing and configuring github-mcp-server in .mcp.json"},
  {"content": "Test github-mcp-server integration with Claude Code", "status": "pending", "activeForm": "Testing github-mcp-server integration with Claude Code"},
  {"content": "Document github-mcp-server usage patterns and examples", "status": "pending", "activeForm": "Documenting github-mcp-server usage patterns and examples"},
  {"content": "Update MCP server catalog with github integration details", "status": "pending", "activeForm": "Updating MCP server catalog with github integration details"}
]

// MCP Troubleshooting Pattern
[
  {"content": "Reproduce MCP server connection issue in development environment", "status": "pending", "activeForm": "Reproducing MCP server connection issue in development environment"},
  {"content": "Analyze MCP server logs and error messages", "status": "pending", "activeForm": "Analyzing MCP server logs and error messages"},
  {"content": "Identify root cause of MCP server communication failure", "status": "pending", "activeForm": "Identifying root cause of MCP server communication failure"},
  {"content": "Implement fix for MCP server configuration", "status": "pending", "activeForm": "Implementing fix for MCP server configuration"},
  {"content": "Validate MCP server fix and add prevention measures", "status": "pending", "activeForm": "Validating MCP server fix and adding prevention measures"}
]
```

### MCP Task-Memory Bridge

#### **TodoWrite to MCP Memory Entity Conversion**

**When to Create Memory Entities from MCP TodoWrite:**
- **MCP session completion** with significant server integration progress
- **Major MCP milestone achievement** (server collection complete, configuration optimized)
- **MCP learning breakthrough** or server troubleshooting insight
- **User explicitly requests** MCP session documentation

**MCP Conversion Process:**
1. **Assess MCP TodoWrite session** for documentation value
2. **Extract key MCP outcomes** and configuration decisions
3. **Create appropriate entity type** (conversation, diary, or logic)
4. **Include MCP TodoWrite context** in entity observations
5. **Reference specific MCP tasks** that led to breakthroughs

#### **MCP Memory Entity Templates from TodoWrite**

**MCP Conversation Entity from Server Integration Session:**
```json
{
  "type": "entity",
  "name": "2025-09-21 GitHub MCP Server Integration Session",
  "entityType": "conversation",
  "observations": [
    "path", "/mcp-logs/2025-09-21-github-server-integration.md",
    "profile", "DEVELOPER",
    "tags", "#mcp-servers #session #server-integration #github #completed",
    "todowrite_context", "5-task server integration: research → install → configure → test → document",
    "mcp_server", "github-mcp-server v1.0.0",
    "configuration_details", "Added to .mcp.json with GITHUB_TOKEN environment variable",
    "integration_notes", "Successfully integrated with Claude Code, enables repository analysis",
    "testing_approach", "Validated server functionality with repository search and file reading",
    "next_steps", "Explore advanced GitHub server features and repository automation"
  ]
}
```

**MCP Diary Entity from Learning Session:**
```json
{
  "type": "entity",
  "name": "2025-09-21 MCP Server Configuration Pattern Discovery",
  "entityType": "diary",
  "observations": [
    "profile", "DEVELOPER",
    "tags", "#mcp-servers #learning #configuration #server-management #insight",
    "todowrite_trigger", "MCP troubleshooting led to discovering configuration anti-pattern",
    "pattern_discovered", "Using relative paths in .mcp.json causing server startup failures across environments",
    "solution_approach", "Implemented environment variable approach for dynamic path resolution",
    "methodology_insight", "TodoWrite tracking helped identify exact server initialization sequence",
    "future_application", "Apply environment variable pattern to all path-dependent MCP servers"
  ]
}
```

### MCP Multi-Step Development Workflows

#### **MCP Server Collection Development Pattern**
```markdown
## MCP TodoWrite → Agent Coordination → Memory Integration

### Phase 1: MCP Planning (TodoWrite)
- [ ] Research available MCP servers for project requirements
- [ ] Design MCP server architecture and integration strategy
- [ ] Create MCP server installation and testing plan

### Phase 2: MCP Implementation (TodoWrite + Future Agent Coordination)
- [ ] Install and configure core MCP servers
- [ ] Test MCP server functionality and integration
- [ ] Develop custom MCP servers for specific needs
- [ ] Optimize MCP configuration for performance

### Phase 3: MCP Validation (TodoWrite)
- [ ] Validate all MCP servers with comprehensive testing
- [ ] Document MCP server usage patterns and examples
- [ ] Create MCP troubleshooting guides and solutions

### Phase 4: MCP Documentation (Memory Integration)
- [ ] Create memory entities from MCP TodoWrite outcomes
- [ ] Document MCP architectural decisions and server selections
- [ ] Record MCP configuration patterns for future reference
```

#### **MCP Troubleshooting and Problem-Solving Pattern**
```markdown
## Systematic MCP Debugging with TodoWrite

### MCP Investigation Phase
- [ ] Reproduce MCP server issue consistently
- [ ] Gather relevant MCP logs and configuration information
- [ ] Analyze MCP server communication and data flow

### MCP Analysis Phase
- [ ] Identify potential MCP server configuration causes
- [ ] Test MCP hypotheses systematically
- [ ] Isolate specific MCP server components or dependencies

### MCP Resolution Phase
- [ ] Implement targeted MCP configuration fix
- [ ] Validate fix resolves original MCP issue
- [ ] Add MCP validation tests to prevent regression

### MCP Documentation Phase (Memory Entity)
- Record MCP debugging methodology that worked
- Document MCP solution pattern for similar future issues
- Note any MCP system insights discovered during investigation
```

---

## Domain Agent Coordination Protocol (Future-Ready)

### Overview
This protocol prepares the MCP template for future multi-agent orchestration capabilities while maintaining current MCP functionality. It provides the foundation for TodoWrite-coordinated MCP agent delegation and result integration.

### MCP Task Delegation via TodoWrite

#### **MCP Agent Spawning Decision Tree**
```markdown
## When to Use Agents vs. Profile Switching for MCP Work

### Simple MCP Tasks → Profile Switching (Current Method)
- Single MCP server installation or configuration
- Quick MCP methodology changes within conversation
- Straightforward MCP server testing or validation

### Complex MCP Single-Domain → Task Tool Domain Agent
- Deep MCP server ecosystem analysis requiring research expertise
- Complex MCP architecture design needing engineering focus
- Advanced MCP server development requiring specialized coding

### Multi-Domain MCP Analysis → Parallel Domain Agents
- MCP requirements gathering + technical implementation + testing
- MCP server research + system design + development workflow
- MCP ecosystem evaluation + architecture planning + deployment strategy

### Comprehensive MCP Analysis → Split Role Sub-Agents
- Multiple expert perspectives on MCP server selection
- Quality assurance for MCP configuration requiring different viewpoints
- Complex MCP decision-making needing diverse analysis approaches
```

#### **MCP Agent Coordination via TodoWrite**
```json
// Future TodoWrite Pattern for MCP Agent Coordination
[
  {"content": "Research MCP server ecosystem for optimal server selection", "status": "pending", "activeForm": "Delegating MCP ecosystem research to RESEARCHER agent", "agent_assigned": "RESEARCHER"},
  {"content": "Design MCP server architecture for scalability and performance", "status": "pending", "activeForm": "Delegating MCP architecture design to ENGINEER agent", "agent_assigned": "ENGINEER"},
  {"content": "Implement custom MCP server development and testing", "status": "pending", "activeForm": "Delegating MCP implementation to DEVELOPER agent", "agent_assigned": "DEVELOPER"},
  {"content": "Integrate MCP agent results and create memory entities", "status": "pending", "activeForm": "Integrating MCP agent results and creating memory entities"}
]
```

### MCP Agent Result Integration

#### **Structured MCP Agent Result Format**
```json
// Standard format for MCP agent results returning to main coordination
{
  "agent_profile": "RESEARCHER|ENGINEER|DEVELOPER|CREATIVE|HUMANIST|TRANSLATOR",
  "task_type": "mcp-analysis|mcp-design|mcp-implementation|mcp-creative|mcp-ethical|mcp-documentation",
  "completion_status": "completed|partial|blocked",
  "mcp_findings": {
    "primary_outcomes": ["MCP Outcome 1", "MCP Outcome 2"],
    "methodology_used": "Specific MCP analysis or development approach taken",
    "key_insights": ["MCP Insight 1", "MCP Insight 2"],
    "recommendations": ["MCP Action 1", "MCP Action 2"],
    "confidence_level": "high|medium|low"
  },
  "mcp_context": {
    "servers_analyzed": ["server1", "server2"],
    "configuration_changes": "Description of .mcp.json modifications",
    "testing_results": "Summary of MCP server testing outcomes"
  },
  "memory_integration": {
    "entity_type": "conversation|diary|logic",
    "suggested_tags": "#mcp-servers #content-type #mcp-domain #activity #outcome",
    "key_observations": [
      "mcp_server", "Specific server names and versions",
      "methodology", "MCP approach or analysis method used",
      "outcomes", "Summary of MCP results achieved"
    ]
  },
  "next_steps": ["MCP Follow-up action 1", "MCP Follow-up action 2"],
  "dependencies": ["Dependency on other MCP agent results", "External MCP requirements"]
}
```

#### **MCP Agent Result Processing Protocol**
```markdown
## Main Agent MCP Result Integration Process

### Step 1: Validate MCP Agent Results
- [ ] Confirm MCP result format compliance
- [ ] Verify MCP completion status and quality
- [ ] Check for missing MCP information or dependencies

### Step 2: Update MCP TodoWrite Status
- [ ] Mark corresponding MCP TodoWrite task as completed
- [ ] Update task description with key MCP outcomes
- [ ] Add follow-up MCP tasks based on agent recommendations

### Step 3: MCP Memory Integration
- [ ] Extract memory_integration section from MCP agent results
- [ ] Apply MCP project context determination for entity naming
- [ ] Create entities using mcp__memory__create_entities
- [ ] Include MCP agent coordination context in observations

### Step 4: MCP Coordination Documentation
- [ ] Document MCP multi-agent coordination in entity observations
- [ ] Record MCP agent specialization effectiveness
- [ ] Note MCP coordination patterns for future optimization
```

### MCP Future Evolution Path

#### **Progressive MCP Agent Integration**
```markdown
## Evolution from MCP TodoWrite to Multi-Agent MCP Coordination

### Phase 1: Enhanced MCP TodoWrite (Current Implementation)
- TodoWrite for MCP session task management
- Manual profile switching for MCP domain expertise
- Memory entity creation from MCP TodoWrite outcomes

### Phase 2: MCP Agent-Assisted TodoWrite
- TodoWrite delegates complex MCP tasks to domain agents
- MCP agent results integrate back to TodoWrite workflow
- Hybrid approach: simple MCP tasks stay in main agent, complex tasks delegated

### Phase 3: Full MCP Multi-Agent Orchestration
- Intelligent MCP task complexity assessment
- Automatic MCP agent spawning and coordination
- Advanced MCP result synthesis and memory integration
```

#### **Preparation for MCP Multi-Agent Architecture**
```markdown
## MCP Template Readiness for Agent Evolution

### Current MCP Foundations Established:
- [ ] TodoWrite integration for MCP task management
- [ ] Memory entity creation protocols for MCP work
- [ ] Profile-specific MCP documentation patterns
- [ ] Domain Profile Switching Protocol for MCP development

### Future MCP Enhancements Ready for Integration:
- [ ] MCP agent spawning prompt templates
- [ ] MCP result integration frameworks
- [ ] Multi-agent MCP coordination patterns
- [ ] Advanced MCP orchestration protocols
```

This future-ready MCP protocol ensures that current MCP TodoWrite workflows seamlessly evolve into multi-agent orchestration when those capabilities are implemented, without disrupting existing MCP functionality or requiring template restructuring.

---

_Claude, always follow this MCP-specific protocol when working on MCP server development. Test all server changes thoroughly and maintain comprehensive documentation for future reference._

**Template Version**: 1.0
**Compatible with**: Enhanced Git Workflow Protocol v1.0
**MCP Integration**: Full support for MCP server development lifecycle
**Profile Support**: DEVELOPER + ENGINEER focused
**Last Review**: 2025-09-20