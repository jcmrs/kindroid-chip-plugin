# CLAUDE.md Template Selector Guide

**Purpose**: Help choose the appropriate CLAUDE.md template for different project types
**Last Updated**: 2025-09-20

---

## Available Templates

### **1. Base Template** (`CLAUDE-AXIVO-base-template.md`)
**Use When**:
- Starting a new project type not covered by specific templates
- Need a foundation to customize for unique project requirements
- Want to understand the standard structure before specializing

**Profile Focus**: Universal (RESEARCHER/ENGINEER/DEVELOPER/CREATIVE/HUMANIST/TRANSLATOR + Smart Git Orchestration)
**Customization Required**: High - requires significant adaptation

### **2. MCP Project Template** (`CLAUDE-AXIVO-mcp-project-template.md`)
**Use When**:
- Developing or managing MCP (Model Context Protocol) servers
- Building collections of MCP servers for Claude Code
- Integrating multiple MCP servers into workflows
- Testing and validating MCP server functionality

**Profile Focus**: DEVELOPER + ENGINEER (with full Axivo integration + Smart Git Orchestration)
**Customization Required**: Low - ready for MCP development

### **3. Research Project Template** (`CLAUDE-AXIVO-research-project-template.md`)
**Use When**:
- Conducting systematic research and analysis
- Analyzing ecosystems, communities, or technologies
- Creating comprehensive reports and documentation
- Performing comparative studies or reviews

**Profile Focus**: RESEARCHER (with full Axivo integration + Smart Git Orchestration)
**Customization Required**: Medium - adapt methodology and scope

### **4. Development Project Template** (`CLAUDE-AXIVO-development-project-template.md`)
**Use When**:
- Building software applications or systems
- Implementing features and fixing bugs
- Focusing on code quality and testing
- Following software development best practices

**Profile Focus**: DEVELOPER (with full Axivo integration + Smart Git Orchestration)
**Customization Required**: Medium - adapt to technology stack

---

## Selection Decision Tree

### **Question 1: What is the primary focus of your project?**

#### **A. Building/Managing MCP Servers** → Use **MCP Project Template**
- You're working with Model Context Protocol servers
- You need to configure, test, or develop MCP servers
- You're building a collection of MCP tools for Claude Code

#### **B. Research and Analysis** → Use **Research Project Template**
- You're investigating technologies, communities, or practices
- You need systematic methodology for gathering and analyzing information
- Your primary output is reports, analysis, or documentation

#### **C. Software Development** → Use **Development Project Template**
- You're building applications, tools, or systems
- You need code quality standards and testing frameworks
- Your primary output is functional software

#### **D. Other/Unique Project** → Use **Base Template**
- Your project doesn't fit the above categories
- You need maximum flexibility for customization
- You're creating a new project type

### **Question 2: What is your primary profile/role?**

#### **RESEARCHER Profile**
- **Best Fit**: Research Project Template (full Axivo integration)
- **Alternative**: Base Template (for non-research projects)
- **Features**: Memory-based research tracking, systematic analysis protocols

#### **ENGINEER Profile**
- **Best Fit**: MCP Project Template (for MCP work) or Base Template
- **Alternative**: Development Project Template (for implementation work)
- **Features**: Architecture decision tracking, system design memory integration

#### **DEVELOPER Profile**
- **Best Fit**: Development Project Template (full Axivo integration)
- **Alternative**: MCP Project Template (for MCP development)
- **Features**: Implementation pattern tracking, debugging solution preservation

#### **CREATIVE Profile**
- **Best Fit**: Base Template (customize for creative workflows)
- **Features**: Creative process documentation, inspiration tracking
- **Workspace**: `creative/` directory with projects, inspiration, iterations

#### **HUMANIST Profile**
- **Best Fit**: Base Template (customize for humanist approaches)
- **Features**: Human-centered analysis, ethical consideration documentation
- **Workspace**: `humanist/` directory with analysis, ethics, impact assessments

#### **TRANSLATOR Profile**
- **Best Fit**: Base Template (customize for translation workflows)
- **Features**: Translation project tracking, linguistic analysis preservation
- **Workspace**: `translator/` directory with projects, references, quality checks

### **Question 3: What level of customization do you want?**

#### **Minimal Customization**
- **MCP Project Template**: Ready for MCP server work
- **Research Project Template**: Ready for systematic research

#### **Moderate Customization**
- **Development Project Template**: Adapt to your technology stack
- **Research Project Template**: Adapt methodology to your domain

#### **High Customization**
- **Base Template**: Start with foundation and build custom approach

---

## Template Customization Guidelines

### **Required Customizations for All Templates**

**🚨 CRITICAL TEMPLATE ENHANCEMENTS (New in Version 1.2)**:
All templates now include three major new sections that dramatically improve usability:

1. **Template Customization Protocol** - Systematic process for replacing 25+ placeholders
2. **TodoWrite Integration Protocol** - Session-level task management with memory bridge
3. **Domain Agent Coordination Protocol** - Future-ready multi-agent orchestration

**Standard Customization Requirements**:
1. **Replace placeholders** in square brackets `[PLACEHOLDER]` using systematic replacement process
2. **Update project-specific information** in Purpose & Context section
3. **Adapt folder structure** to match project needs
4. **Configure technology-specific** tools and requirements
5. **Set up profile-specific** protocols and workflows
6. **Verify Axivo integration** is properly configured for selected profiles
7. **Initialize memory systems** according to profile-specific patterns
8. **Configure TodoWrite integration** for session-level task tracking
9. **Understand agent coordination** framework for future multi-agent capabilities

### **Common Customization Areas**

#### **Project Information**
```markdown
# Replace these placeholders:
[PROJECT_TYPE] → "MCP Server Collection" or "Community Research"
[DESCRIBE_PROJECT_PURPOSE] → Actual project description
[DEVELOPMENT_METHODOLOGY] → Your preferred approach
[QUALITY_REQUIREMENTS] → Your quality standards
```

#### **Technology Stack**
```markdown
# Adapt for your technologies:
[PROGRAMMING_LANGUAGE] → JavaScript, Python, etc.
[FRAMEWORK_OR_PLATFORM] → React, FastAPI, etc.
[PACKAGE_MANAGER] → npm, pip, cargo, etc.
[TESTING_FRAMEWORK] → Jest, pytest, etc.
```

#### **Workflow Customization**
```markdown
# Adjust workflows for your needs:
[METHODOLOGY_TYPE] → Agile, waterfall, iterative
[ANALYSIS_APPROACH] → Qualitative, quantitative, mixed
[DEPLOYMENT_ENVIRONMENT] → Local, cloud, hybrid
```

### **Advanced Customization**

#### **Adding Custom Sections**
```markdown
## [Number]. [Custom Section Name]
Add sections specific to your project needs:
- Industry-specific protocols
- Compliance requirements
- Integration specifications
- Custom quality gates
```

#### **Profile-Specific Enhancements**
```markdown
# Add profile-specific subsections:
### RESEARCHER Specific Protocols
### ENGINEER Specific Standards
### DEVELOPER Specific Guidelines
```

---

## Template Usage Instructions

### **Step 1: Select Template**
1. Use decision tree above to choose appropriate template
2. Copy chosen template to your project root as `CLAUDE.md`
3. Review entire template to understand structure and requirements

### **Step 2: Customize Content**
1. Replace all placeholders with project-specific information
2. Adapt folder structure section to match your project
3. Update tool and technology references
4. Modify workflow protocols as needed

### **Step 3: Validate Setup**
1. Run through Section 0 (Configuration Check) to ensure setup
2. Test any specified commands or tools
3. Verify folder structure matches template recommendations
4. Confirm all team members understand protocols
5. **Validate Axivo integration**: Test `memory:read_graph` and `time:get_current_time`
6. **Confirm profile activation**: Verify selected profile methodology is active
7. **Test memory persistence**: Create test entities to validate memory system
8. **Validate TodoWrite functionality**: Test task creation, status updates, and completion tracking
9. **Review agent coordination**: Understand how future multi-agent capabilities will integrate
10. **Test placeholder replacement**: Ensure all placeholders have been systematically replaced

### **Step 4: Iteration and Improvement**
1. Use template as living document that evolves with project
2. Document lessons learned and protocol improvements
3. Update template based on project experience
4. Consider contributing improvements back to template collection

---

## Template Maintenance

### **Version Control**
- All templates are version controlled in the `/templates` directory
- Template updates follow same Git workflow as project code
- Major template changes should be reviewed and tested

### **Template Evolution**
- Templates incorporate community best practices and lessons learned
- Regular reviews ensure templates remain current and useful
- User feedback drives template improvements and new template creation

### **Community Alignment**
- Templates based on research of community best practices
- Regular updates incorporate emerging patterns and standards
- Templates designed to be compatible with popular community tools

---

## Quick Reference

### **Template File Locations**
```
templates/
├── CLAUDE-template-selector.md            # This file
├── CLAUDE-AXIVO-base-template.md          # Universal foundation template with Smart Git
├── CLAUDE-AXIVO-mcp-project-template.md   # MCP server development with Smart Git
├── CLAUDE-AXIVO-research-project-template.md    # Research and analysis with Smart Git
└── CLAUDE-AXIVO-development-project-template.md # Software development with Smart Git
```

### **Selection Quick Guide**
- **MCP Servers** → `CLAUDE-AXIVO-mcp-project-template.md`
- **Research/Analysis** → `CLAUDE-AXIVO-research-project-template.md`
- **Software Development** → `CLAUDE-AXIVO-development-project-template.md`
- **Custom/Other** → `CLAUDE-AXIVO-base-template.md`

### **Template Enhancement Level**
- **Fully Enhanced**: MCP, Research, Development (with Customization Protocol + TodoWrite + Agent Coordination)
- **Standard**: Base Template (core Axivo integration with standard protocols)
- **Customization Effort**: Low for enhanced templates, Medium for base template adaptation

### **Key Enhancement Features (Version 1.2)**
- **Systematic Placeholder Replacement**: Complete process for 25+ template placeholders
- **TodoWrite Task Management**: Session-level task coordination with memory bridge
- **Agent Coordination Framework**: Future-ready multi-agent orchestration protocols
- **Testing Feedback Integration**: Based on real Claude Code testing and user feedback
- **Cross-Session Continuity**: Enhanced memory integration with tactical execution bridge

---

_Choose the template that best matches your project type and profile focus. All templates now include full Axivo integration with memory persistence, profile-specific workflows, and auto-compact awareness._

**Selector Version**: 1.2
**Template Compatibility**: All current CLAUDE.md templates with Enhanced Axivo integration
**Enhanced Features**: Template Customization Protocol, TodoWrite Integration, Agent Coordination Framework
**Axivo Integration**: Full support for all 6 profiles (RESEARCHER/ENGINEER/DEVELOPER/CREATIVE/HUMANIST/TRANSLATOR)
**Testing Validated**: Based on feedback from Claude Code testing instance (Phase 1 implementation)
**Last Review**: 2025-09-21