# CLAUDE.md — Research Project Configuration

**Project Type**: Research & Analysis
**Profile Focus**: RESEARCHER + Documentation
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
    3. Make initial commit with research project structure
    4. (Optional) Link to remote: `git remote add origin https://github.com/<user>/<repo>.git`

- **Is the current branch appropriate for this work?**
  - Check: `git branch --show-current`
  - For research work, use specific branch types:
    - `research-<topic>-YYYYMMDD` (investigation and analysis)
    - `analysis-<subject>-YYYYMMDD` (data analysis work)
    - `review-<system>-YYYYMMDD` (systematic reviews)
    - `docs-<report-type>-YYYYMMDD` (documentation creation)

### **Research Environment Validation**
- **Are research tools available?**
  - Web search capabilities (WebSearch, WebFetch)
  - Document analysis tools (PDF readers, text processors)
  - Data organization tools (spreadsheet apps, note-taking)
  - Citation management (if applicable)
  - If NO: Install required research tools

### **Project Structure Validation**
- **Are research-specific folders present?**
  - Required: `research/`, `analysis/`, `reports/`, `data/`, `references/`
  - Optional: `methodology/`, `findings/`, `presentations/`
  - If NO: Create missing folders per structure below

### **Documentation Standards**
- **Is research methodology documented?**
  - Research questions clearly defined
  - Methodology and approach documented
  - Success criteria established
  - Timeline and milestones defined
  - If NO: Document research framework before proceeding

**If ANY of the above checks fail:**
- **STOP.**
- Complete the missing configuration steps before research work
- Update this checklist if new research requirements are discovered

**If YES to all:**
- Note current research phase and objectives
- Proceed with research as described below

---

## 1. Research Project Purpose & Context

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
- [RESEARCH_AREA] analysis and documentation systems
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
- Creative research methodologies and innovative analysis
- Design thinking applications in research
- Creative documentation and presentation techniques
- Innovative data visualization and communication

### **HUMANIST Domain**
- Human-centered research and ethical considerations
- Social impact assessment and community analysis
- Inclusive research methodologies and accessibility
- Cultural sensitivity and diverse perspective integration

### **TRANSLATOR Domain**
- Multilingual research and cross-cultural analysis
- International comparative studies and localization
- Cross-cultural communication and global perspectives
- Language-specific research methodologies and cultural adaptation

## Development Workflow

### **Multi-Profile Collaboration**
1. **RESEARCHER**: Analyze target system → generate requirements and feasibility assessment
2. **ENGINEER**: Design architecture → create technical specifications and integration strategy
3. **DEVELOPER**: Implement solution → build, test, and deploy working applications
4. **Iteration**: Cross-profile review and refinement throughout research process

## Platform Environment
- Windows + Git Bash: Use Unix commands (mv, ls, rm, mkdir)
- Path handling: Forward slashes in Git Bash, quote spaces
- Multi-profile workflow: Context switching between profiles as needed

### **Research Mission**
[DEFINE_RESEARCH_OBJECTIVES]

### **Research Questions**
1. **Primary Research Question**: [PRIMARY_QUESTION]
2. **Secondary Questions**:
   - [SECONDARY_QUESTION_1]
   - [SECONDARY_QUESTION_2]
   - [SECONDARY_QUESTION_3]

### **Research Methodology**
- **Approach**: [METHODOLOGY_TYPE] (e.g., systematic review, comparative analysis, case study)
- **Data Sources**: [DATA_SOURCES] (e.g., academic papers, GitHub repositories, community forums)
- **Analysis Framework**: [ANALYSIS_APPROACH] (e.g., qualitative, quantitative, mixed methods)
- **Validation Method**: [VALIDATION_APPROACH] (e.g., peer review, expert consultation)

### **Success Criteria**
- **Deliverables**: [EXPECTED_OUTPUTS] (e.g., comprehensive report, data analysis, recommendations)
- **Quality Standards**: [QUALITY_METRICS] (e.g., source diversity, analysis depth, actionability)
- **Timeline**: [PROJECT_TIMELINE] (e.g., 4 weeks, 8 weeks)

---

## 2. Research Principles & Standards

### **Information Quality Standards**
- **Source Credibility**: Prioritize authoritative, well-maintained sources
- **Data Currency**: Use most recent available information
- **Source Diversity**: Include multiple perspectives and approaches
- **Verification**: Cross-reference findings across multiple sources

### **Documentation Discipline**
- **Real-time Documentation**: Document findings as research progresses
- **Source Attribution**: Maintain detailed citations and references
- **Methodology Transparency**: Document research process and decisions
- **Reproducibility**: Ensure research can be validated and extended

### **Analysis Rigor**
- **Systematic Approach**: Follow established methodology consistently
- **Bias Awareness**: Acknowledge and mitigate research biases
- **Pattern Recognition**: Identify and validate emerging patterns
- **Evidence-Based Conclusions**: Base conclusions on documented evidence

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

## 3. Research Project Structure

```
research-project-root/
├── CLAUDE.md              # This file: research project protocols
├── README.md              # Project overview and research summary
├── .gitignore             # Git exclusion patterns
├── research/              # Research execution and process
│   ├── methodology/       # Research methodology documentation
│   ├── progress/          # Research progress tracking
│   ├── sessions/          # Individual research session notes
│   └── planning/          # Research planning and scheduling
├── data/                  # Research data and sources
│   ├── sources/           # Original source materials
│   ├── extracts/          # Key information extracts
│   ├── analysis/          # Analysis datasets
│   └── validation/        # Validation and verification data
├── analysis/              # Data analysis and synthesis
│   ├── patterns/          # Pattern identification and analysis
│   ├── comparisons/       # Comparative analysis work
│   ├── synthesis/         # Information synthesis
│   └── validation/        # Analysis validation
├── reports/               # Research outputs and deliverables
│   ├── interim/           # Interim findings and progress reports
│   ├── final/             # Final research deliverables
│   ├── presentations/     # Presentation materials
│   └── supplements/       # Additional supporting materials
├── references/            # Citations and reference management
│   ├── bibliography/      # Comprehensive bibliography
│   ├── annotations/       # Annotated references
│   └── categories/        # Categorized reference collections
├── tools/                 # Research tools and utilities
│   ├── scripts/           # Analysis and processing scripts
│   ├── templates/         # Document and analysis templates
│   └── validators/        # Quality assurance tools
└── archive/               # Deprecated or superseded materials
```

---

## 4. Research Git Workflow Protocol

### **Research-Specific Branch Strategy**
```bash
# Research phases
research-<topic>-YYYYMMDD             # Primary research investigation
analysis-<subject>-YYYYMMDD           # Data analysis and synthesis
review-<system>-YYYYMMDD              # Systematic reviews
validation-<findings>-YYYYMMDD        # Validation and verification

# Documentation and reporting
docs-methodology-YYYYMMDD             # Methodology documentation
docs-findings-YYYYMMDD                # Findings documentation
report-<type>-YYYYMMDD                # Report creation
presentation-<audience>-YYYYMMDD      # Presentation development

# Data and reference management
data-collection-<source>-YYYYMMDD     # Data collection activities
refs-update-<category>-YYYYMMDD       # Reference management
```

### **Research Commit Message Standards**
```bash
# Research-specific commit types
research: research activities and data collection
analysis: data analysis and pattern identification
findings: research findings and discoveries
docs: research documentation
refs: reference and citation management
data: dataset updates and management
methodology: methodology updates and refinements

# Examples:
research: complete ecosystem analysis of 39 local files
analysis: identify community patterns in CLAUDE.md files
findings: document key insights from GitHub repository analysis
docs: create comprehensive research methodology
refs: add 15 community repositories to bibliography
data: organize research data into structured categories
methodology: refine analysis framework based on findings
```

### **Research Progress Tracking**
- **Session Documentation**: Document each research session with objectives and outcomes
- **Progress Milestones**: Regular commits tracking research progress
- **Finding Validation**: Separate commits for validated vs preliminary findings
- **Source Management**: Systematic tracking of all research sources

---

## 5. Research Execution Protocols

### **Research Session Management**
```markdown
## Research Session Template
**Date**: [DATE]
**Duration**: [TIME_SPENT]
**Objective**: [SESSION_OBJECTIVE]
**Methodology**: [APPROACH_USED]

### Activities Completed
- [ACTIVITY_1]
- [ACTIVITY_2]
- [ACTIVITY_3]

### Key Findings
- [FINDING_1]
- [FINDING_2]
- [FINDING_3]

### Sources Reviewed
- [SOURCE_1] - [BRIEF_ASSESSMENT]
- [SOURCE_2] - [BRIEF_ASSESSMENT]

### Next Steps
- [NEXT_ACTION_1]
- [NEXT_ACTION_2]

### Questions Raised
- [QUESTION_1]
- [QUESTION_2]
```

### **Data Collection Framework**
1. **Source Identification**
   - Define search criteria and scope
   - Identify authoritative sources
   - Document source selection rationale
   - Track source quality metrics

2. **Information Extraction**
   - Systematic extraction process
   - Standardized data capture format
   - Quality validation checkpoints
   - Source attribution maintenance

3. **Data Organization**
   - Structured categorization system
   - Cross-referencing methodology
   - Version control for datasets
   - Access and retrieval optimization

### **Analysis Methodology**
1. **Pattern Recognition**
   - Systematic pattern identification
   - Pattern validation across sources
   - Exception and outlier analysis
   - Confidence level assessment

2. **Comparative Analysis**
   - Multi-source comparison framework
   - Similarity and difference identification
   - Trend analysis over time
   - Impact assessment methodology

3. **Synthesis Framework**
   - Information integration approach
   - Conflict resolution methodology
   - Gap identification process
   - Conclusion derivation standards

---

## 6. Research Quality Assurance

### **Source Validation**
- **Authority Assessment**: Evaluate source credibility and expertise
- **Currency Verification**: Confirm information recency and relevance
- **Bias Detection**: Identify and account for potential biases
- **Cross-Validation**: Verify findings across multiple sources

### **Analysis Validation**
- **Methodology Review**: Ensure consistent application of research methods
- **Finding Verification**: Cross-check analysis against source data
- **Logic Validation**: Verify reasoning and conclusion derivation
- **Peer Review**: External validation of findings and methodology

### **Documentation Standards**
- **Completeness**: Ensure all research activities are documented
- **Accuracy**: Verify all citations and references are correct
- **Clarity**: Ensure documentation is clear and understandable
- **Reproducibility**: Enable others to validate and extend research

---

## 7. Research Tools & Integration

### **Information Gathering Tools**
- **WebSearch**: For discovering sources and references
- **WebFetch**: For detailed content analysis
- **GitHub Search**: For repository and code analysis
- **PDF Analysis**: For academic and technical document review

### **Analysis Tools**
- **Sequential Thinking**: For complex analysis and reasoning
- **Memory System**: For cross-session knowledge management
- **TodoWrite**: For research task management
- **Text Processing**: For content analysis and synthesis

### **Documentation Tools**
- **Markdown**: For structured documentation
- **Git**: For version control and collaboration
- **Reference Management**: For citation and bibliography management
- **Template Systems**: For consistent documentation formatting

---

## 8. Memory Integration Protocols

### **Entity-Based Research Tracking**
- **Use mcp__memory__** for persistent research state across sessions
- **Create entities** for research milestones, analysis findings, methodology insights
- **Cross-session continuity** through memory persistence and research knowledge graph evolution
- **Document relationships** between research topics and analytical discoveries

### **Research Memory Spaces**

**RESEARCHER Memory Entities**:
- **Ecosystem Analysis**: Technology landscape assessments, competitive comparisons
- **Repository Evaluations**: Source quality assessments, implementation patterns
- **Requirements Documentation**: Feasibility studies, specification development
- **Methodology Insights**: Research approach refinements, analytical frameworks

### **Research Documentation Frequency Guidelines**

#### **Research-Specific Documentation Patterns**
- **Research Context Determination**: Use `basename "$(pwd)"` + research focus for identification
- **Research Tagging Schema**: `#research #analysis #investigation #findings #methodology`
- **Auto-Compact Integration**: Monitor context window during extensive analysis sessions
- **Investigation Intensity Adaptation**: Increase documentation during complex research phases

#### **Research Documentation Triggers**
- **Major Finding Discovery**: Document significant research discoveries and implications
- **Methodology Refinements**: Track research approach improvements and lessons learned
- **Source Analysis Completion**: Record source evaluations and quality assessments
- **Analysis Session Completion**: Document session outcomes and next research steps

---

## 9. Research Workflow Enhancement

### **Research Learning System**
- **Pattern Recognition**: Identify successful research methodologies and analytical approaches
- **Source Solution Documentation**: Preserve research source discovery and evaluation techniques
- **Investigation Workflow Optimization**: Track and improve research efficiency and thoroughness
- **Cross-Domain Knowledge Transfer**: Share research insights between different investigation areas

### **Research Quality Assurance**
- **Source Validation**: Systematic verification of source credibility and currency
- **Analysis Verification**: Cross-check findings against multiple sources and methodologies
- **Methodology Documentation**: Maintain clear records of research approaches and rationale
- **Finding Preservation**: Ensure research insights persist and remain accessible

---

## 10. Research Collaboration & Sharing

### **Internal Collaboration**
- **Progress Sharing**: Regular updates on research progress
- **Finding Discussion**: Collaborative analysis and interpretation
- **Methodology Refinement**: Iterative improvement of research approach
- **Quality Review**: Peer review of findings and conclusions

### **External Sharing**
- **Community Contribution**: Sharing findings with relevant communities
- **Open Research**: Making research datasets and methodology available
- **Publication Preparation**: Preparing findings for broader dissemination
- **Follow-up Research**: Identifying opportunities for extended research

---

## 11. Research Troubleshooting

### **Common Research Challenges**
- **Source Access Issues**: Paywalls, broken links, unavailable content
- **Information Overload**: Too much information to process effectively
- **Quality Variations**: Inconsistent source quality and reliability
- **Time Management**: Balancing depth vs breadth within time constraints

### **Analysis Challenges**
- **Pattern Ambiguity**: Unclear or conflicting patterns in data
- **Bias Management**: Unconscious bias affecting analysis
- **Scope Creep**: Research expanding beyond original parameters
- **Validation Difficulties**: Challenges in verifying findings

### **Documentation Issues**
- **Citation Management**: Keeping track of numerous sources
- **Version Control**: Managing evolving documents and datasets
- **Organization**: Maintaining clear structure as research grows
- **Collaboration**: Coordinating documentation across multiple contributors

---

## 12. Research Project Evolution

### **Methodology Refinement**
- **Iterative Improvement**: Continuously refine research approach
- **Lesson Integration**: Apply learnings to improve methodology
- **Tool Enhancement**: Adopt new tools and techniques as appropriate
- **Community Learning**: Incorporate best practices from research community

### **Scope Management**
- **Scope Monitoring**: Regular assessment of research scope vs objectives
- **Priority Adjustment**: Adapt priorities based on emerging findings
- **Timeline Management**: Balance thoroughness with time constraints
- **Quality Maintenance**: Ensure quality standards despite scope changes

### **Lessons Learned**

#### 2025-09-18: Claude Code Ecosystem Research
- **Context**: Comprehensive analysis of Claude Code community patterns and best practices
- **Methodology**: Multi-source analysis including local files, GitHub repositories, and AI-generated reports
- **Findings**: Identified systematic patterns in community approaches to CLAUDE.md configuration
- **Application**: Use validated community patterns for future project standardization

---

## 13. Research Resources & References

### **Research Methodology Resources**
- [Research Design Guidelines]
- [Systematic Review Methodology]
- [Qualitative Analysis Frameworks]
- [Data Collection Best Practices]

### **Tools and Platforms**
- [Academic Databases]
- [Reference Management Systems]
- [Analysis Software]
- [Collaboration Platforms]

### **Community Resources**
- [Research Communities]
- [Professional Networks]
- [Open Research Initiatives]
- [Methodology Sharing Platforms]

---

_Claude, always follow this research-specific protocol when conducting research projects. Maintain systematic documentation and ensure all findings are properly validated and attributed._

**Template Version**: 1.0
**Compatible with**: Enhanced Git Workflow Protocol v1.0
**Research Focus**: Systematic analysis and documentation
**Profile Support**: RESEARCHER focused with documentation emphasis
**Last Review**: 2025-09-20