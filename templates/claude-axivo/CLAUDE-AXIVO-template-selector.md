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

**Profile Focus**: Universal (RESEARCHER/ENGINEER/DEVELOPER/CREATIVE/HUMANIST/TRANSLATOR)
**Customization Required**: High - requires significant adaptation
**Enhanced Features**:
- Comprehensive Axivo Integration with systematic documentation protocols
- Cross-session continuity with memory persistence
- Profile-specific documentation patterns for all 6 profiles
- Domain Profile Switching Protocol with step-by-step execution guidance
- Hierarchical tagging schema with automatic project context determination
- Quality validation framework and error handling procedures

### **2. MCP Project Template** (`CLAUDE-AXIVO-mcp-project-template.md`)
**Use When**:
- Developing or managing MCP (Model Context Protocol) servers
- Building collections of MCP servers for Claude Code
- Integrating multiple MCP servers into workflows
- Testing and validating MCP server functionality

**Profile Focus**: DEVELOPER + ENGINEER (with comprehensive Axivo integration)
**Customization Required**: Low - ready for MCP development
**Enhanced Features**:
- MCP-specific documentation protocols with server-focused tagging
- Cross-session MCP learning with server configuration memory
- Profile-specific MCP documentation patterns
- MCP Domain Profile Switching Protocol with server development context
- MCP troubleshooting and debugging solution preservation
- Automated MCP context determination and validation

### **3. Research Project Template** (`CLAUDE-AXIVO-research-project-template.md`)
**Use When**:
- Conducting systematic research and analysis
- Analyzing ecosystems, communities, or technologies
- Creating comprehensive reports and documentation
- Performing comparative studies or reviews

**Profile Focus**: RESEARCHER (with comprehensive Axivo integration)
**Customization Required**: Medium - adapt methodology and scope
**Enhanced Features**:
- Research-specific documentation protocols with methodology-focused tagging
- Cross-session research learning with investigation pattern memory
- Profile-specific research documentation patterns
- Research Domain Profile Switching Protocol with investigation context
- Research breakthrough and methodology discovery preservation
- Automated research context determination and domain-specific validation

### **4. Development Project Template** (`CLAUDE-AXIVO-development-project-template.md`)
**Use When**:
- Building software applications or systems
- Implementing features and fixing bugs
- Focusing on code quality and testing
- Following software development best practices

**Profile Focus**: DEVELOPER (with comprehensive Axivo integration)
**Customization Required**: Medium - adapt to technology stack
**Enhanced Features**:
- Development-specific documentation protocols with technology-focused tagging
- Cross-session development learning with implementation pattern memory
- Profile-specific development documentation patterns
- Development Domain Profile Switching Protocol with coding context
- Debugging solution and architecture decision preservation
- Automated development context determination and code quality validation

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
- **Best Fit**: Research Project Template (comprehensive Axivo integration)
- **Alternative**: Base Template (for non-research projects)
- **Enhanced Features**:
  - Cross-session research methodology memory with investigation pattern preservation
  - Systematic analysis protocols with automatic documentation triggers
  - Research breakthrough and discovery preservation through diary entities
  - Domain-specific tagging schema for research documentation

#### **ENGINEER Profile**
- **Best Fit**: MCP Project Template (for MCP work) or Base Template
- **Alternative**: Development Project Template (for implementation work)
- **Enhanced Features**:
  - Architecture decision memory with design rationale preservation
  - System integration patterns and deployment strategy documentation
  - Cross-session learning with architectural pattern reference
  - Logic entities for complex design decision justification

#### **DEVELOPER Profile**
- **Best Fit**: Development Project Template (comprehensive Axivo integration)
- **Alternative**: MCP Project Template (for MCP development)
- **Enhanced Features**:
  - Implementation pattern memory with debugging solution preservation
  - Workflow optimization documentation with automatic breakthrough detection
  - Cross-session learning with previous solution reference
  - Technology-specific context determination and validation

#### **CREATIVE Profile**
- **Best Fit**: Base Template (comprehensive Axivo integration with creative focus)
- **Enhanced Features**:
  - Creative process memory with innovation pattern preservation
  - Design iteration documentation with breakthrough moment capture
  - Cross-session learning with inspiration source reference
  - Creative methodology discovery preservation through diary entities
- **Workspace**: `creative/` directory with projects, inspiration, iterations

#### **HUMANIST Profile**
- **Best Fit**: Base Template (comprehensive Axivo integration with humanist focus)
- **Enhanced Features**:
  - Human impact analysis memory with ethical framework preservation
  - Intellectual discourse documentation with cultural insight capture
  - Cross-session learning with ethical consideration reference
  - Social context studies and diverse perspective integration
- **Workspace**: `humanist/` directory with analysis, ethics, impact assessments

#### **TRANSLATOR Profile**
- **Best Fit**: Base Template (comprehensive Axivo integration with translation focus)
- **Enhanced Features**:
  - Translation project memory with cultural adaptation preservation
  - Linguistic discovery documentation with quality assurance method capture
  - Cross-session learning with translation approach reference
  - Semantic preservation processes and cross-cultural methodology insights
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
1. **Replace placeholders** in square brackets `[PLACEHOLDER]`
2. **Update project-specific information** in Purpose & Context section
3. **Adapt folder structure** to match project needs
4. **Configure technology-specific** tools and requirements
5. **Set up profile-specific** protocols and workflows
6. **Verify Axivo integration** is properly configured for selected profiles
7. **Initialize memory systems** according to profile-specific patterns

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
├── CLAUDE-AXIVO-template-selector.md     # This file
├── CLAUDE-AXIVO-base-template.md         # Universal foundation template
├── CLAUDE-AXIVO-mcp-project-template.md  # MCP server development
├── CLAUDE-AXIVO-research-project-template.md  # Research and analysis
└── CLAUDE-AXIVO-development-project-template.md  # Software development
```

### **Selection Quick Guide**
- **MCP Servers** → `CLAUDE-AXIVO-mcp-project-template.md`
- **Research/Analysis** → `CLAUDE-AXIVO-research-project-template.md`
- **Software Development** → `CLAUDE-AXIVO-development-project-template.md`
- **Custom/Other** → `CLAUDE-AXIVO-base-template.md`

### **Customization Effort**
- **Low**: MCP Project (if doing MCP work), Research, Development (comprehensive Axivo integration)
- **Medium**: Base Template (for CREATIVE/HUMANIST/TRANSLATOR profiles with enhanced memory integration)
- **High**: Base Template (for completely custom approaches requiring extensive modification)

---

_Choose the template that best matches your project type and profile focus. All templates now include comprehensive Axivo integration with systematic documentation protocols, cross-session continuity, memory persistence, profile-specific workflows, and intelligent auto-compact awareness._

**Selector Version**: 2.0
**Template Compatibility**: All CLAUDE-AXIVO templates with comprehensive integration
**Enhanced Axivo Integration**:
- Comprehensive documentation protocols with entity decision frameworks
- Cross-session continuity with memory persistence across all 6 profiles
- Domain Profile Switching Protocol with step-by-step execution guidance
- Hierarchical tagging schema with automatic project context determination
- Quality validation framework with pre/post-creation verification
- Profile-specific documentation patterns and error handling procedures
**Profile Support**: Full support for RESEARCHER/ENGINEER/DEVELOPER/CREATIVE/HUMANIST/TRANSLATOR
**Last Review**: 2025-09-21