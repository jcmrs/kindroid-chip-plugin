# CLAUDE.md — Research Project Configuration

**Project Type**: Research & Analysis
**Profile Focus**: RESEARCHER + Documentation
**Last Updated**: 2025-09-20

---

## Axivo Integration

### Session Initialization Protocol
On every session start, silently perform these actions:

1. **Execute `memory:read_graph`** to access the memory system
   - **How**: Use the mcp__memory__read_graph tool (available in your tool list)
   - **Purpose**: Load existing entities and relationships from previous research sessions
   - **Result**: Returns the current memory graph with all stored research entities

2. **Execute `time:get_current_time`** to establish temporal context
   - **How**: Use the mcp__time__get_current_time tool with timezone "Europe/Amsterdam"
   - **Purpose**: Establish current temporal context for research documentation
   - **Result**: Returns current date and time for entity creation

3. **Load active profile** (RESEARCHER, ENGINEER, DEVELOPER, CREATIVE, HUMANIST, or TRANSLATOR) based on task context
   - **How**: Assess user's request to determine primary research profile needed
   - **Purpose**: Apply research-specific methodology and documentation patterns
   - **Result**: Research-focused behavior and systematic analysis approach activated

4. **Replace default AI assistant behaviors** with profile methodology
   - **How**: Follow research-specific workflows and investigation patterns
   - **Purpose**: Ensure systematic, methodology-driven research approach
   - **Result**: Methodical research responses with systematic documentation

5. **Initialize documentation awareness** from previous session entities
   - **How**: Review loaded memory graph for relevant past research and insights
   - **Purpose**: Build upon previous investigations and maintain research continuity
   - **Result**: Context-aware research session with accumulated knowledge

### Systematic Documentation Protocol Integration

#### Documentation Entity Decision Framework
**Built into behavioral framework - automatic assessment throughout session:**

**Create Conversation Entity When:**
- Session involves significant research work (>30 min active investigation)
- Multi-step research methodology implementation or analysis completed
- Complex investigation or data analysis resolved
- User requests session documentation
- Research findings and insights with actionable outcomes

**Create Diary Entity When:**
- Pattern recognition about research methodologies emerges
- Research methodology improvements discovered through session work
- Strategic insights about research project evolution identified
- Cross-session research learning opportunities recognized

**Create Logic Entity When:**
- User explicitly requests reasoning transparency ("Show your reasoning")
- Complex research decisions require step-by-step justification
- Research methodology selection involves multiple trade-offs
- Sequential thinking methodology applied to research problems

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
   - Example: `/Users/name/projects/ecosystem-research` → project name = "ecosystem-research"

2. **Validation and Formatting**:
   - Use lowercase, replace spaces/special characters with hyphens
   - Maximum 20 characters for tag compatibility
   - Example: "AI Research Project" → "ai-research-project"

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

#### Research-Specific Hierarchical Tagging Schema (REQUIRED)
```
Tag Order: #project-name #content-type #research-domain #activity-type #outcome-result

Project: #[determined-project-name] (auto-determined from working directory)
Content: #report #session #review #planning #debugging #learning #decision
Research Domain: #analysis #investigation #methodology #literature-review #data-collection #findings
Activity: #implementation #debugging #optimization #research #planning #collaboration
Outcome: #completed #partial #blocked #insight #decision #template
```

#### Research Content Type Selection Guide
```
#report - Research analysis reports, assessments, findings
#session - Regular research/investigation sessions
#review - Literature reviews, source evaluations, quality assessments
#planning - Research strategy, methodology design, project planning
#debugging - Research methodology troubleshooting and refinement
#learning - Knowledge discovery, research skill development
#decision - Research methodology and approach decisions
```

#### Entity Structure Compliance (ENFORCE)

**How to Create Entities:**
- **Tool**: Use `mcp__memory__create_entities` (available in your tool list)
- **When**: Follow the Documentation Entity Decision Framework above
- **Format**: Provide array of entities with required structure below

**Complete Research Entity Example:**
```json
{
  "type": "entity",
  "name": "2025-09-21 Claude Code Ecosystem Analysis Session",
  "entityType": "conversation",
  "observations": [
    "path", "/research-logs/2025-09-21-ecosystem-analysis.md",
    "profile", "RESEARCHER",
    "tags", "#ecosystem-research #session #analysis #investigation #completed",
    "research_context", "Systematic analysis of 39 CLAUDE.md files from community repositories",
    "methodology", "Comparative analysis with pattern identification and best practice extraction",
    "summary", "Identified 12 key patterns and 5 critical gaps in community CLAUDE.md implementations",
    "findings", "Community relies heavily on git workflows, testing protocols, and documentation standards",
    "next_steps", "Synthesize findings into template improvements and community contribution guidelines"
  ]
}
```

**Entity Creation Process:**
1. **Determine entity type** based on Documentation Entity Decision Framework
2. **Generate research-focused name** following format: "YYYY-MM-DD [Research Description]"
3. **Select appropriate tags** from Research-Specific Hierarchical Tagging Schema
4. **Include research_context** with methodology or domain information
5. **Execute creation** using mcp__memory__create_entities tool

### Domain Profile Switching Protocol

#### **What is Profile Switching in Research Context?**
Profile switching means changing your active methodology and behavior patterns during research sessions to match different types of research work. Each profile has distinct approaches to investigation, analysis, and knowledge synthesis.

#### **When to Switch Profiles in Research Work**
**Switch profiles when research tasks fundamentally change:**
- User asks for systematic analysis/investigation → Switch to **RESEARCHER**
- User asks for research system design → Switch to **ENGINEER**
- User asks for research tool implementation → Switch to **DEVELOPER**
- User asks for innovative research approaches → Switch to **CREATIVE**
- User asks for ethical research considerations → Switch to **HUMANIST**
- User asks for cross-cultural research → Switch to **TRANSLATOR**

#### **How to Execute Profile Switch in Research Work**

**Step 1: Recognize Research Switch Trigger**
- Monitor for research-specific profile keywords
- Assess if current profile matches research work needed
- Examples: "Can you investigate this topic?" (RESEARCHER) or "Let's build a research automation tool" (DEVELOPER)

**Step 2: Announce Profile Switch (Internal)**
- Mentally note: "Switching from [CURRENT_PROFILE] to [NEW_PROFILE] for research work"
- Understand this changes your research methodology approach
- Adjust research documentation patterns for new profile

**Step 3: Apply New Profile Research Methodology**
- **RESEARCHER**: Systematic investigation, analysis patterns, comprehensive research
- **ENGINEER**: Research system architecture, methodology design, infrastructure planning
- **DEVELOPER**: Research tool implementation, automation, practical research systems
- **CREATIVE**: Innovative research approaches, novel investigation methods
- **HUMANIST**: Ethical research considerations, human impact analysis, cultural sensitivity
- **TRANSLATOR**: Cross-cultural research, multilingual sources, global perspectives

**Step 4: Update Research Documentation Context**
- Use new profile in entity creation: `"profile": "NEW_PROFILE"`
- Apply research-specific tagging schema with profile context
- Follow profile-specific research documentation frequency guidelines

#### **Research Profile Switch Examples**

**Example 1: Research to Development Switch**
```
User: "Based on your analysis, can you now build a tool to automate this research process?"
Response: [Switching from RESEARCHER to DEVELOPER profile]
- Change from research analysis to research tool implementation
- Shift documentation from #analysis #research to #implementation #research
- Focus on practical tool building instead of strategic research analysis
```

**Example 2: Research to Engineering Switch**
```
User: "This research methodology is complex. Can you design a systematic framework?"
Response: [Switching from RESEARCHER to ENGINEER profile]
- Change from research investigation to research system design
- Shift documentation from #investigation to #architecture #research
- Focus on methodological framework design instead of immediate analysis
```

**Example 3: Multi-Profile Research Session**
```
Research Session Flow:
1. Start: RESEARCHER (systematic investigation and analysis)
2. Switch: ENGINEER (design research methodology framework)
3. Switch: DEVELOPER (implement research automation tools)
4. Switch: RESEARCHER (evaluate results and synthesize findings)

Each switch applies different methodology to research work while maintaining continuity.
```

#### **Research Profile Switching Best Practices**

1. **Maintain Research Context**: Previous profile insights inform new research profile work
2. **Document Research Switches**: Note profile changes in research entity observations when relevant
3. **Be Explicit**: If unsure which profile research work needs, ask user for clarification
4. **Stay Flexible**: Some research work benefits from rapid profile switching within responses
5. **Preserve Research Quality**: Each profile maintains research standards regardless of switches

### Research-Specific Profile Documentation Patterns

#### **RESEARCHER Profile Documentation:**
- **Focus**: Research methodology development, investigation patterns, systematic analysis approaches
- **Frequency**: Create diary entries for methodology discoveries and research breakthroughs
- **Content**: Emphasize cross-session learning and research pattern evolution
- **Tagging**: Prioritize #analysis #research #methodology #insight tags

#### **ENGINEER Profile Documentation:**
- **Focus**: Research system design, data architecture, methodology infrastructure planning
- **Frequency**: Document significant research system decisions with logic entities
- **Content**: Emphasize technical decision-making for research infrastructure
- **Tagging**: Prioritize #architecture #planning #research #decision tags

#### **DEVELOPER Profile Documentation:**
- **Focus**: Research tool implementation, data processing solutions, analysis automation
- **Frequency**: Document successful research tool development and automation approaches
- **Content**: Emphasize practical research solutions and workflow optimizations
- **Tagging**: Prioritize #implementation #debugging #research #completed tags

#### **CREATIVE Profile Documentation:**
- **Focus**: Creative research approaches, innovative methodologies, novel analytical perspectives
- **Frequency**: Document creative research iteration cycles and breakthrough insights
- **Content**: Balance analytical rigor with creative research problem-solving
- **Tagging**: Prioritize #creative #innovation #research #iteration tags

#### **HUMANIST Profile Documentation:**
- **Focus**: Human-centered research considerations, ethical research practices, social context analysis
- **Frequency**: Create diary entries for research ethics discourse and cultural insights
- **Content**: Emphasize responsible research conduct and diverse perspective integration
- **Tagging**: Prioritize #ethics #cultural #research #discourse tags

#### **TRANSLATOR Profile Documentation:**
- **Focus**: Cross-linguistic research, multilingual source analysis, cultural research adaptation
- **Frequency**: Document research translation discoveries and cross-cultural methodology insights
- **Content**: Research semantic preservation, cultural context in research methodology
- **Tagging**: Prioritize #translation #cultural #research #adaptation tags

### Cross-Session Continuity Protocols

#### Session Context Recovery
```
1. On session start, query memory for research-related entities from previous sessions
2. Identify patterns from previous similar research work
3. Reference relevant previous research insights in current session documentation
4. Build upon previous research learnings rather than starting from scratch
```

#### Research Institutional Memory Accumulation
```
1. Track research preferences and methodology patterns across sessions
2. Evolve research documentation detail level based on user feedback patterns
3. Remember research domain-specific terminology and methodology preferences
4. Reference previous research solutions when encountering similar challenges
```

### Error Handling Procedures

#### Documentation Failure Recovery
```
If entity creation fails:
1. Retry with minimal observation set
2. Log failure details for investigation
3. Notify user of documentation limitation
4. Continue research session without blocking user work
5. Create local backup documentation if possible
```

#### Memory System Error Response
```
If memory system inaccessible:
1. Continue research session with behavioral framework only
2. Cache research documentation content for later creation
3. Alert user to temporary documentation limitation
4. Attempt memory reconnection periodically
5. Resume research documentation when system recovers
```

### Quality Validation Framework

#### Pre-Entity-Creation Validation (AUTOMATIC)
- [ ] Entity type matches research decision framework criteria
- [ ] Naming follows systematic convention exactly
- [ ] Tags follow research-specific structured schema requirements
- [ ] Template consultation completed successfully
- [ ] Content contains actionable research information for future reference
- [ ] No sensitive research data included in observations

#### Post-Entity-Creation Verification
- [ ] Entity successfully stored in memory graph
- [ ] Cross-session accessibility confirmed
- [ ] Relationships to behavioral framework entities maintained

### Research Documentation Frequency Guidelines

#### Automatic Documentation Triggers
- **Before auto-compact activation** - When context window approaches 95% capacity during research work
- **Upon completion of any multi-step research task** - Significant investigations or analyses
- **When significant research breakthrough achieved** - Important findings or methodological insights
- **At natural research session conclusion** - When user indicates research work completion

#### User-Initiated Documentation
- **Immediate response to documentation trigger phrases**
- **Proactive documentation when user expresses satisfaction with research findings**
- **Documentation when user indicates research session should be remembered**

#### Documentation Throttling
- **Avoid creating entities for trivial research interactions**
- **Don't duplicate entities for very similar research sessions**
- **Prioritize quality over quantity for research documentation**
- **Context-aware timing** - avoid documentation during rapid research iteration phases

---

## CLAUDE.md Capabilities & Integration Overview

### **What This Research Template Provides**

**CLAUDE.md is a research methodology orchestration system that coordinates existing research tools and processes.**

#### **✅ What This Template DOES Provide:**
- **Systematic Research Methodology**: Structured approaches for investigation, analysis, and documentation
- **RESEARCHER Profile Integration**: Memory-based research tracking and cross-session continuity
- **Research Quality Standards**: Protocols for thoroughness, accuracy, and systematic analysis
- **Knowledge Synthesis Framework**: Tools for combining insights from multiple sources
- **Research Documentation Patterns**: Standardized formats for findings, analysis, and recommendations
- **Cross-Session Research Memory**: Persistent knowledge building across research sessions

#### **❌ What This Template Does NOT Replace:**
- **Research Sources**: Still need actual websites, databases, academic papers, primary sources
- **Analysis Tools**: Still need statistical software, qualitative analysis tools, specialized research applications
- **Reference Management**: Still need citation managers like Zotero, Mendeley, EndNote
- **Data Collection**: Still need surveys, interviews, experiments, data gathering tools
- **Publication Platforms**: Still need academic journals, repositories, presentation tools

### **Research Integration Philosophy**

**This template enhances research work by:**
1. **Systematizing Research Process**: Structured methodologies from question formation to conclusion
2. **Quality Assurance**: Consistent standards for research rigor and evidence evaluation
3. **Knowledge Preservation**: Cross-session continuity preventing loss of research insights
4. **Synthesis Facilitation**: Frameworks for combining and analyzing multiple information sources
5. **Documentation Standards**: Repeatable formats for research outputs and findings

**Example Research Workflow:**
```
CLAUDE.md Template → Guides research methodology
     ↓
Research Sources → Provide raw information and data
     ↓
Analysis Tools → Process and examine evidence
     ↓
TodoWrite → Manages research tasks and progress
     ↓
Memory Entities → Preserve insights and build knowledge
```

### **Research-Specific Capability Clarification**

#### **For Research Methodology:**
- **Template provides**: Systematic investigation protocols, analysis frameworks, quality standards
- **You still need**: Access to primary sources, subject matter expertise, domain knowledge

#### **For Data Collection and Analysis:**
- **Template provides**: Structured approaches to gathering and evaluating information
- **Research tools provide**: Actual data collection, statistical analysis, specialized processing

#### **For Knowledge Synthesis:**
- **Template provides**: Frameworks for combining insights, cross-referencing sources, building conclusions
- **Your expertise provides**: Critical evaluation, domain-specific interpretation, contextual understanding

### **Research Success Indicators**

**Template working correctly for research:**
- [ ] Research questions are systematically refined and investigated
- [ ] Evidence gathering follows structured, comprehensive approaches
- [ ] Analysis builds logically from evidence to insights to conclusions
- [ ] Cross-session research builds on previous findings through memory system
- [ ] Research outputs meet quality standards for thoroughness and accuracy

**Template needs adjustment for research:**
- [ ] Research protocols feel rigid for exploratory or creative investigation
- [ ] Quality standards don't match the type of research being conducted
- [ ] Memory system isn't capturing useful research insights and connections
- [ ] Documentation patterns don't fit the research output requirements

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
- **Memory Integration**: Research ecosystem analysis patterns, investigation methodologies, strategic insights preservation
- **Cross-Session Learning**: Build upon previous research patterns, reference similar analysis approaches
- **Entity Creation**: Create diary entries for methodology discoveries, conversation entities for major research sessions

#### **ENGINEER Profile**
- **Purpose**: System design, architecture planning, technical strategy
- **Workspace**: `engineer/` directory with architecture, integration, infrastructure
- **Methodology**: Requirements analysis → system design → technical specifications
- **Output**: Architecture diagrams, integration strategies, deployment plans
- **Memory Integration**: Research architecture decisions, system design rationales, integration patterns preservation
- **Cross-Session Learning**: Reference previous design decisions, build upon architectural patterns
- **Entity Creation**: Create logic entities for design decisions, conversation entities for architecture sessions

#### **DEVELOPER Profile**
- **Purpose**: Hands-on implementation, coding, testing, practical development
- **Workspace**: `developer/` directory with src, tests, configs, examples
- **Methodology**: Specifications → implementation → testing → validation
- **Output**: Working code, test suites, deployment-ready applications
- **Memory Integration**: Research implementation patterns, debugging solutions, code quality insights preservation
- **Cross-Session Learning**: Reference previous solutions, build upon successful implementation approaches
- **Entity Creation**: Create conversation entities for major debugging victories, document workflow optimizations

#### **CREATIVE Profile**
- **Purpose**: Creative ideation, design thinking, innovative problem-solving
- **Workspace**: `creative/` directory with projects, inspiration, iterations
- **Methodology**: Inspiration → ideation → experimentation → refinement
- **Output**: Creative solutions, design prototypes, innovative approaches
- **Memory Integration**: Research creative processes, innovation patterns, design iteration insights preservation
- **Cross-Session Learning**: Build upon previous creative breakthroughs, reference inspiration sources
- **Entity Creation**: Create diary entries for creative methodology discoveries, document breakthrough moments

#### **HUMANIST Profile**
- **Purpose**: Human-centered analysis, ethical considerations, social impact assessment
- **Workspace**: `humanist/` directory with analysis, ethics, impact assessments
- **Methodology**: Human needs analysis → ethical evaluation → social impact design
- **Output**: Human-centered recommendations, ethical guidelines, impact assessments
- **Memory Integration**: Research human impact analysis, ethical evaluations, social context studies preservation
- **Cross-Session Learning**: Build upon previous ethical frameworks, reference cultural considerations
- **Entity Creation**: Create diary entries for intellectual discourse, document ethical decision frameworks

#### **TRANSLATOR Profile**
- **Purpose**: Language translation, localization, cross-cultural communication
- **Workspace**: `translator/` directory with projects, references, quality checks
- **Methodology**: Source analysis → translation → quality assurance → cultural adaptation
- **Output**: Translated content, localization guides, cultural adaptation strategies
- **Memory Integration**: Research translation projects, cultural adaptations, quality assurance methods preservation
- **Cross-Session Learning**: Reference previous translation approaches, build upon linguistic discoveries
- **Entity Creation**: Create conversation entities for complex translation challenges, document methodology insights

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

## Smart Git Orchestration Protocol

### **Research-Focused Git Intelligence**

**Claude Code provides intelligent Git workflow management specifically optimized for research projects and documentation:**

#### **Research Work Recognition**
When starting research tasks:
- Suggest research-specific branch naming: `research-<topic>-YYYYMMDD`, `analysis-<subject>-YYYYMMDD`
- Evaluate research documentation structure and impact
- Consider research workflow: *"Starting market analysis research. Create branch 'research-market-analysis-20250921'?"*

#### **Research Quality Integration**
For research workflows, automatic quality checks include:
- **Source Validation**: Verify research sources are documented and accessible
- **Methodology Consistency**: Check research approach follows established methodology
- **Citation Completeness**: Validate that sources are properly referenced
- **Analysis Coherence**: Ensure findings logically flow from evidence
- **Documentation Quality**: Verify research outputs meet quality standards

#### **Research Task Completion Intelligence**
When research TodoWrite tasks complete:
```
Research Task: "Analyze competitive landscape for authentication solutions"
↓ Task marked completed
↓ Smart Git Orchestration for Research:
  • git status → research/competitive-analysis.md, sources/auth-vendors.md, findings/market-gaps.md modified
  • Quality checks → sources documented ✅, methodology followed ✅, citations complete ✅
  • Message generation → "research: complete competitive analysis of authentication solution market"
  • Research context → Include methodology used, sources analyzed, key findings summary
  • User proposal → Full research validation report + commit proposal
  • Memory integration → Preserve research insights, methodology, and source relationships
```

### **Research-Specific TodoWrite-Git Integration**

#### **Research Investigation Pattern**
```
Research TodoWrite Tasks:
1. "Define research questions and methodology" → completed
2. "Gather primary and secondary sources" → completed
3. "Analyze data and identify key insights" → completed
4. "Synthesize findings into comprehensive report" → completed

Smart Commit Grouping:
→ "research: complete comprehensive authentication market analysis with methodology and findings"

Quality Requirements:
→ Sources documented, methodology documented, analysis comprehensive, findings supported
```

#### **Analysis Update Pattern**
```
Research TodoWrite Task: "Update market analysis with new vendor data and trends"
↓ Task completion triggers:
  • Source validation and citation updates
  • Methodology consistency check
  • Analysis impact assessment
  • Finding coherence validation
→ "research: update market analysis with Q3 2025 vendor data and emerging trends"
```

#### **Research Quality Gates**
Before any research commit proposal:
- **Source Documentation**: All research sources are properly documented and accessible
- **Methodology Adherence**: Research follows established and documented methodology
- **Citation Standards**: All claims are properly sourced and referenced
- **Analysis Quality**: Findings logically derive from evidence and methodology
- **Documentation Completeness**: Research outputs include complete methodology and source documentation

### **Research User Control Patterns**

#### **Research-Specific Proposals**
```
"Research task 'competitive analysis' completed.

Research Changes:
• research/competitive-analysis.md: +847 lines (comprehensive market analysis)
• sources/authentication-vendors.json: +156 lines (vendor data and capabilities)
• methodology/analysis-framework.md: +89 lines (analysis methodology documentation)
• findings/market-opportunities.md: +234 lines (strategic insights and recommendations)

Research Validation:
✅ Sources: 23 primary sources documented with access dates and citations
✅ Methodology: Systematic competitive analysis framework applied consistently
✅ Citations: All claims properly referenced with source attribution
✅ Analysis: Findings logically supported by evidence and methodology
✅ Quality: Research meets established quality standards for thoroughness and accuracy

Research Impact:
✅ New insights: 7 key market gaps identified with supporting evidence
✅ Strategic value: Clear recommendations for market positioning
✅ Knowledge base: Comprehensive vendor capability matrix created
✅ Methodology: Reusable analysis framework developed

Proposed Commit:
• Type: research (research investigation)
• Scope: authentication market analysis
• Message: 'research: complete comprehensive authentication vendor analysis with strategic insights'
• Files: 4 modified, 2 added

Proceed with research commit?"
```

#### **Research Response Options**
- **"Yes"** → Execute full research commit
- **"Review methodology first"** → Validate research approach before commit
- **"Split findings and sources"** → Separate data and analysis commits
- **"Add peer review"** → Include review process before commit
- **"Update citations only"** → Commit source updates separately

### **Research Memory Integration**

#### **Research Knowledge Preservation**
- **Methodology Insights**: Document successful research approaches and frameworks
- **Source Relationships**: Preserve connections between sources and findings
- **Analysis Patterns**: Remember effective analysis techniques and structures
- **Quality Standards**: Maintain research quality criteria and validation approaches
- **Finding Synthesis**: Document how insights were derived and validated

#### **Research Cross-Session Learning**
- **Research Preferences**: Learn user's preferred research methodologies and sources
- **Quality Standards**: Adapt to project-specific research rigor requirements
- **Documentation Style**: Understand preferred research documentation formats
- **Analysis Depth**: Learn optimal balance of breadth vs depth for different research types
- **Source Types**: Adapt to user's preferred source types and validation approaches

### **Research Workflow Benefits**

- **Research Quality**: Automated validation ensures research meets systematic standards
- **Source Management**: Systematic tracking of research sources and citations
- **Methodology Consistency**: Ensures research approaches are documented and followed
- **Knowledge Building**: Preserves research insights and methodology across sessions
- **Efficiency**: Reduces overhead of research documentation and quality assurance

**This research-optimized protocol transforms Claude Code into an intelligent research partner that understands research methodology, source management, and analysis quality standards.**

---

## Template Customization Protocol

### Overview
This research template contains placeholder values that must be customized for your specific research project. Follow this systematic process to ensure complete and accurate template instantiation for research work.

### Step 1: Research-Specific Placeholder Identification and Replacement

#### **How to Find All Placeholders**
1. **Search for bracket patterns**: Look for `[PLACEHOLDER_NAME]` throughout the template
2. **Use systematic search**: Search for `[` to find all placeholder locations
3. **Validate completeness**: Ensure no placeholders remain after customization

#### **Research Project Placeholder List**

**Research Context & Scope:**
- `[DESCRIBE_APPLICATION_PURPOSE]` → Replace with research project purpose and objectives
- `[RESEARCH_DOMAIN]` → Replace with research domain (e.g., "AI/ML ecosystems", "Community practices")
- `[RESEARCH_METHODOLOGY]` → Replace with methodology (e.g., "Systematic literature review", "Comparative analysis")
- `[RESEARCH_QUESTIONS]` → Replace with specific research questions to investigate

**Research Approach:**
- `[DATA_COLLECTION_METHODS]` → Replace with data collection approaches
- `[ANALYSIS_FRAMEWORK]` → Replace with analytical framework (e.g., "Grounded theory", "Content analysis")
- `[VALIDATION_APPROACH]` → Replace with findings validation methodology
- `[DOCUMENTATION_STANDARDS]` → Replace with research documentation requirements

**Research Success Criteria:**
- `[RESEARCH_DELIVERABLES]` → Replace with expected research outputs
- `[QUALITY_METRICS]` → Replace with research quality measures
- `[TIMELINE_MILESTONES]` → Replace with research timeline and milestones
- `[IMPACT_CRITERIA]` → Replace with success and impact criteria

**Research Technology Stack:**
- `[RESEARCH_TOOLS]` → Replace with research and analysis tools
- `[DATA_MANAGEMENT]` → Replace with data organization and storage approach
- `[COLLABORATION_PLATFORMS]` → Replace with research collaboration tools

### Step 2: Research Project Context Configuration

#### **Required Research Information Gathering**
Before customization, collect the following research-specific information:

1. **Research Project Overview**
   - What research questions are being investigated?
   - What is the scope and domain of the research?
   - Who are the stakeholders and beneficiaries?

2. **Research Methodology**
   - What research approach and methodology will be used?
   - What data collection methods are appropriate?
   - What analysis framework will guide the work?
   - How will findings be validated?

3. **Research Environment**
   - What tools and platforms for research management?
   - How will research data be organized and stored?
   - What collaboration and documentation standards?
   - What citation and reference management approach?

4. **Research Quality Standards**
   - What criteria define successful research?
   - How will research quality be measured?
   - What validation and verification requirements?
   - What documentation and reproducibility standards?

#### **Research Customization Process**
1. **Replace research placeholders systematically** using information gathered above
2. **Verify methodological soundness** of all specified approaches
3. **Ensure research consistency** across all template sections
4. **Update research references** to match actual domain and scope

### Step 3: Research Template Validation and Testing

#### **Research Template Validation Checklist**
- [ ] **All research placeholders replaced**: No `[PLACEHOLDER]` patterns remain
- [ ] **Methodological accuracy**: All research methods and approaches are sound
- [ ] **Research consistency**: Research approach is consistent throughout template
- [ ] **Research completeness**: All required research information is included
- [ ] **Research relevance**: All sections apply to the specific research domain

#### **Testing Customized Research Template**
1. **Validate research methodology** matches project requirements
2. **Test research tools and platforms** referenced in template
3. **Verify research documentation** standards are achievable
4. **Confirm research timeline** is realistic and well-structured

#### **Research Template Health Check**
```bash
# Search for remaining placeholders
grep -r "\[.*\]" CLAUDE.md

# Verify research methodology references are accurate
# Check that all research tools are accessible
# Confirm all citation formats are correct
# Validate research timeline and milestones
```

---

## TodoWrite Integration Protocol

### Overview
This protocol bridges tactical research session management (TodoWrite) with strategic research documentation (Axivo memory entities), enabling both immediate research task tracking and long-term research knowledge accumulation.

### Research Session-Level Task Management

#### **When to Use TodoWrite for Research Work**
- **Multi-step research investigations** requiring progress tracking
- **Complex literature reviews** with systematic source analysis
- **Data collection and analysis** with methodical approach
- **Research writing and documentation** with structured workflow
- **Any research task taking longer than 15-20 minutes** of active work

#### **Research TodoWrite Best Practices**
```markdown
## Effective TodoWrite Usage for Research

### Research Task Granularity
- Break research tasks into specific, actionable items
- Each task should be completable within 30-60 minutes
- Use clear, research-focused language ("Analyze 5 GitHub repositories" not "Repository analysis")

### Research Status Management
- Mark ONE research task as in_progress at a time
- Complete research tasks immediately after finishing (don't batch)
- Update status in real-time as research progresses

### Research Task Description Standards
- Use active voice: "Synthesize literature findings" not "Literature synthesis"
- Include specific research criteria and scope when helpful
- Reference relevant sources, datasets, or research questions
```

#### **Research TodoWrite Template Patterns**
```json
// Literature Review Pattern
[
  {"content": "Identify and collect relevant academic sources for research domain", "status": "pending", "activeForm": "Identifying and collecting relevant academic sources for research domain"},
  {"content": "Analyze and categorize collected sources by methodology and findings", "status": "pending", "activeForm": "Analyzing and categorizing collected sources by methodology and findings"},
  {"content": "Synthesize key patterns and gaps from literature analysis", "status": "pending", "activeForm": "Synthesizing key patterns and gaps from literature analysis"},
  {"content": "Document literature review findings with proper citations", "status": "pending", "activeForm": "Documenting literature review findings with proper citations"},
  {"content": "Integrate literature insights into research methodology framework", "status": "pending", "activeForm": "Integrating literature insights into research methodology framework"}
]

// Data Collection and Analysis Pattern
[
  {"content": "Design data collection protocol and validation criteria", "status": "pending", "activeForm": "Designing data collection protocol and validation criteria"},
  {"content": "Collect primary data from identified sources and repositories", "status": "pending", "activeForm": "Collecting primary data from identified sources and repositories"},
  {"content": "Apply analytical framework to collected data systematically", "status": "pending", "activeForm": "Applying analytical framework to collected data systematically"},
  {"content": "Validate findings through triangulation and peer review", "status": "pending", "activeForm": "Validating findings through triangulation and peer review"},
  {"content": "Document analysis results with supporting evidence", "status": "pending", "activeForm": "Documenting analysis results with supporting evidence"}
]
```

### Research Task-Memory Bridge

#### **TodoWrite to Research Memory Entity Conversion**

**When to Create Memory Entities from Research TodoWrite:**
- **Research session completion** with significant analytical progress
- **Major research milestone achievement** (literature review complete, data analysis finished)
- **Research methodology breakthrough** or analytical insight discovery
- **User explicitly requests** research session documentation

**Research Conversion Process:**
1. **Assess research TodoWrite session** for documentation value
2. **Extract key research outcomes** and methodological decisions
3. **Create appropriate entity type** (conversation, diary, or logic)
4. **Include research TodoWrite context** in entity observations
5. **Reference specific research tasks** that led to insights

#### **Research Memory Entity Templates from TodoWrite**

**Research Conversation Entity from Analysis Session:**
```json
{
  "type": "entity",
  "name": "2025-09-21 Claude Code Community Pattern Analysis Session",
  "entityType": "conversation",
  "observations": [
    "path", "/research-logs/2025-09-21-community-analysis.md",
    "profile", "RESEARCHER",
    "tags", "#ecosystem-research #session #analysis #community-patterns #completed",
    "todowrite_context", "5-task analysis workflow: source collection → categorization → pattern synthesis → validation → documentation",
    "research_methodology", "Systematic comparative analysis of 39 CLAUDE.md files from community repositories",
    "key_findings", "Identified 12 core patterns and 5 critical gaps in community CLAUDE.md implementations",
    "analysis_framework", "Pattern recognition with gap analysis and best practice extraction",
    "validation_approach", "Cross-referenced findings with multiple repository types and community discussions",
    "next_steps", "Synthesize findings into template improvements and develop community contribution guidelines"
  ]
}
```

**Research Diary Entity from Methodology Discovery:**
```json
{
  "type": "entity",
  "name": "2025-09-21 Multi-Source Research Methodology Discovery",
  "entityType": "diary",
  "observations": [
    "profile", "RESEARCHER",
    "tags", "#methodology #learning #research-approach #systematic-analysis #insight",
    "todowrite_trigger", "Literature review led to discovering enhanced analytical framework",
    "methodology_discovered", "Combining quantitative pattern analysis with qualitative community insights",
    "approach_refinement", "Integrated GitHub repository analysis with local file examination and AI-generated synthesis",
    "research_insight", "TodoWrite tracking revealed optimal sequence for multi-source validation",
    "future_application", "Apply this hybrid methodology to all complex ecosystem research projects"
  ]
}
```

### Research Multi-Step Development Workflows

#### **Comprehensive Research Project Pattern**
```markdown
## Research TodoWrite → Agent Coordination → Memory Integration

### Phase 1: Research Planning (TodoWrite)
- [ ] Define research questions and scope systematically
- [ ] Design research methodology and analytical framework
- [ ] Create data collection and validation protocols

### Phase 2: Research Execution (TodoWrite + Future Agent Coordination)
- [ ] Conduct systematic literature review and source analysis
- [ ] Collect and organize primary research data
- [ ] Apply analytical framework with validation checkpoints
- [ ] Synthesize findings with cross-source triangulation

### Phase 3: Research Validation (TodoWrite)
- [ ] Validate findings through multiple verification methods
- [ ] Document research methodology and analytical decisions
- [ ] Create comprehensive research deliverables and reports

### Phase 4: Research Documentation (Memory Integration)
- [ ] Create memory entities from research TodoWrite outcomes
- [ ] Document methodological insights and analytical breakthroughs
- [ ] Record research patterns and frameworks for future reference
```

#### **Research Problem-Solving and Investigation Pattern**
```markdown
## Systematic Research Investigation with TodoWrite

### Research Question Formulation Phase
- [ ] Identify research gaps and formulate specific questions
- [ ] Review existing literature and establish research context
- [ ] Define research scope and methodological approach

### Data Collection Phase
- [ ] Design data collection protocols and validation criteria
- [ ] Systematically collect data from multiple sources
- [ ] Organize and categorize collected research data

### Analysis Phase
- [ ] Apply analytical framework to research data systematically
- [ ] Identify patterns, themes, and significant findings
- [ ] Validate findings through triangulation and peer review

### Documentation Phase (Memory Entity)
- Record successful research methodologies and analytical approaches
- Document research insights and pattern recognition techniques
- Note any methodological innovations discovered during investigation
```

---

## Domain Agent Coordination Protocol (Future-Ready)

### Overview
This protocol prepares the research template for future multi-agent orchestration capabilities while maintaining current research functionality. It provides the foundation for TodoWrite-coordinated research agent delegation and result integration.

### Research Task Delegation via TodoWrite

#### **Research Agent Spawning Decision Tree**
```markdown
## When to Use Agents vs. Profile Switching for Research Work

### Simple Research Tasks → Profile Switching (Current Method)
- Single-source literature review or analysis
- Straightforward data collection or categorization
- Basic research documentation and synthesis

### Complex Research Single-Domain → Task Tool Domain Agent
- Deep literature analysis requiring systematic methodology
- Complex data analysis needing specialized research expertise
- Advanced research synthesis requiring methodological rigor

### Multi-Domain Research Analysis → Parallel Domain Agents
- Literature review + methodology design + data analysis
- Research question formulation + data collection + validation
- Analytical framework development + implementation + documentation

### Comprehensive Research Analysis → Split Role Sub-Agents
- Multiple research perspectives on same research question
- Quality assurance for research requiring different methodological viewpoints
- Complex research decision-making needing diverse analytical approaches
```

#### **Research Agent Coordination via TodoWrite**
```json
// Future TodoWrite Pattern for Research Agent Coordination
[
  {"content": "Conduct systematic literature review for research domain", "status": "pending", "activeForm": "Delegating literature review to RESEARCHER agent", "agent_assigned": "RESEARCHER"},
  {"content": "Design research methodology and analytical framework", "status": "pending", "activeForm": "Delegating methodology design to ENGINEER agent", "agent_assigned": "ENGINEER"},
  {"content": "Implement data collection and analysis protocols", "status": "pending", "activeForm": "Delegating implementation to DEVELOPER agent", "agent_assigned": "DEVELOPER"},
  {"content": "Integrate research agent results and create memory entities", "status": "pending", "activeForm": "Integrating research agent results and creating memory entities"}
]
```

### Research Agent Result Integration

#### **Structured Research Agent Result Format**
```json
// Standard format for research agent results returning to main coordination
{
  "agent_profile": "RESEARCHER|ENGINEER|DEVELOPER|CREATIVE|HUMANIST|TRANSLATOR",
  "task_type": "literature-review|methodology-design|data-analysis|creative-synthesis|ethical-analysis|documentation",
  "completion_status": "completed|partial|blocked",
  "research_findings": {
    "primary_outcomes": ["Research Outcome 1", "Research Outcome 2"],
    "methodology_used": "Specific research approach or analytical method applied",
    "key_insights": ["Research Insight 1", "Research Insight 2"],
    "recommendations": ["Research Action 1", "Research Action 2"],
    "confidence_level": "high|medium|low"
  },
  "research_context": {
    "sources_analyzed": ["source1", "source2"],
    "methodology_applied": "Description of research methodology used",
    "validation_results": "Summary of finding validation outcomes"
  },
  "memory_integration": {
    "entity_type": "conversation|diary|logic",
    "suggested_tags": "#research-domain #content-type #methodology #activity #outcome",
    "key_observations": [
      "methodology", "Specific research approach or method used",
      "findings", "Summary of research results achieved",
      "validation", "Description of validation approach and results"
    ]
  },
  "next_steps": ["Research Follow-up action 1", "Research Follow-up action 2"],
  "dependencies": ["Dependency on other research agent results", "External research requirements"]
}
```

#### **Research Agent Result Processing Protocol**
```markdown
## Main Agent Research Result Integration Process

### Step 1: Validate Research Agent Results
- [ ] Confirm research result format compliance
- [ ] Verify research completion status and methodological quality
- [ ] Check for missing research information or methodological dependencies

### Step 2: Update Research TodoWrite Status
- [ ] Mark corresponding research TodoWrite task as completed
- [ ] Update task description with key research outcomes
- [ ] Add follow-up research tasks based on agent recommendations

### Step 3: Research Memory Integration
- [ ] Extract memory_integration section from research agent results
- [ ] Apply research project context determination for entity naming
- [ ] Create entities using mcp__memory__create_entities
- [ ] Include research agent coordination context in observations

### Step 4: Research Coordination Documentation
- [ ] Document research multi-agent coordination in entity observations
- [ ] Record research agent specialization effectiveness
- [ ] Note research coordination patterns for future methodology optimization
```

### Research Future Evolution Path

#### **Progressive Research Agent Integration**
```markdown
## Evolution from Research TodoWrite to Multi-Agent Research Coordination

### Phase 1: Enhanced Research TodoWrite (Current Implementation)
- TodoWrite for research session task management
- Manual profile switching for research domain expertise
- Memory entity creation from research TodoWrite outcomes

### Phase 2: Research Agent-Assisted TodoWrite
- TodoWrite delegates complex research tasks to domain agents
- Research agent results integrate back to TodoWrite workflow
- Hybrid approach: simple research tasks stay in main agent, complex tasks delegated

### Phase 3: Full Research Multi-Agent Orchestration
- Intelligent research task complexity assessment
- Automatic research agent spawning and coordination
- Advanced research result synthesis and memory integration
```

#### **Preparation for Research Multi-Agent Architecture**
```markdown
## Research Template Readiness for Agent Evolution

### Current Research Foundations Established:
- [ ] TodoWrite integration for research task management
- [ ] Memory entity creation protocols for research work
- [ ] Profile-specific research documentation patterns
- [ ] Domain Profile Switching Protocol for research methodology

### Future Research Enhancements Ready for Integration:
- [ ] Research agent spawning prompt templates
- [ ] Research result integration frameworks
- [ ] Multi-agent research coordination patterns
- [ ] Advanced research orchestration protocols
```

This future-ready research protocol ensures that current research TodoWrite workflows seamlessly evolve into multi-agent orchestration when those capabilities are implemented, without disrupting existing research functionality or requiring template restructuring.

---

_Claude, always follow this research-specific protocol when conducting research projects. Maintain systematic documentation and ensure all findings are properly validated and attributed._

**Template Version**: 1.0
**Compatible with**: Enhanced Git Workflow Protocol v1.0
**Research Focus**: Systematic analysis and documentation
**Profile Support**: RESEARCHER focused with documentation emphasis
**Last Review**: 2025-09-20