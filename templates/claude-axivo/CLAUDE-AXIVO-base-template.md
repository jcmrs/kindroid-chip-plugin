# CLAUDE.md — Onboarding & Best Practices for Claude Code

**Project Type**: [PROJECT_TYPE]
**Profile Focus**: [RESEARCHER/ENGINEER/DEVELOPER/CREATIVE/HUMANIST/TRANSLATOR]
**Last Updated**: [DATE]

---

## Axivo Integration

### Session Initialization Protocol
On every session start, silently perform these actions:

1. **Execute `memory:read_graph`** to access the memory system
   - **How**: Use the mcp__memory__read_graph tool (available in your tool list)
   - **Purpose**: Load existing entities and relationships from previous sessions
   - **Result**: Returns the current memory graph with all stored entities

2. **Execute `time:get_current_time`** to establish temporal context
   - **How**: Use the mcp__time__get_current_time tool with appropriate timezone
   - **Purpose**: Establish temporal awareness for entity timestamps
   - **Result**: Returns current date/time for documentation purposes

3. **Load active profile** (RESEARCHER, ENGINEER, DEVELOPER, CREATIVE, HUMANIST, or TRANSLATOR) based on task context
   - **How**: Analyze the user's request to determine which profile methodology to apply
   - **Purpose**: Each profile has specific documentation patterns and approaches
   - **Result**: Behavioral framework adapts to profile-specific workflows

4. **Replace default AI assistant behaviors** with profile methodology
   - **How**: Use the behavioral patterns defined in the profile sections below
   - **Purpose**: Provide consistent, profile-specific interaction patterns
   - **Result**: Session follows systematic, profile-aware protocols

5. **Initialize documentation awareness** from previous session entities
   - **How**: Review entities from memory graph to understand previous work context
   - **Purpose**: Build upon previous insights rather than starting from scratch
   - **Result**: Continuity across sessions with accumulated institutional memory

### Systematic Documentation Protocol Integration

#### Documentation Entity Decision Framework
**Built into behavioral framework - automatic assessment throughout session:**

**Create Conversation Entity When:**
- Session involves significant problem-solving (>30 min active work)
- Multi-step technical implementation completed
- Complex debugging or analysis resolved
- User requests session documentation
- Collaborative decision-making with actionable outcomes

**Create Diary Entity When:**
- Pattern recognition about user collaboration style emerges
- Methodology improvements discovered through session work
- Strategic insights about project evolution identified
- Cross-session learning opportunities recognized

**Create Logic Entity When:**
- User explicitly requests reasoning transparency ("Show your reasoning")
- Complex problem-solving requires step-by-step justification
- Decision-making involves multiple trade-offs
- Sequential thinking methodology applied to complex problems

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
   - Example: `/Users/name/projects/[PROJECT_TYPE]` → project name = "[PROJECT_TYPE]"

2. **Validation and Formatting**:
   - Use lowercase, replace spaces/special characters with hyphens
   - Maximum 20 characters for tag compatibility
   - Example: "My Project Name!" → "my-project-name"

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

#### Hierarchical Tagging Schema (REQUIRED)
```
Tag Order: #project-name #content-type #domain-topic #activity-type #outcome-result

Project: #[determined-project-name] (auto-determined from working directory)
Content: #report #session #review #planning #debugging #learning #decision
Domain: #[DOMAIN_SPECIFIC_TAGS]
Activity: #implementation #debugging #optimization #research #planning #collaboration
Outcome: #completed #partial #blocked #insight #decision #template
```

#### Content Type Selection Guide
```
#report - Analysis reports, assessments, findings
#session - Regular work/implementation sessions
#review - Code reviews, evaluations, quality assessments
#planning - Strategy, roadmapping, design discussions
#debugging - Troubleshooting and problem-solving sessions
#learning - Discovery, research, educational content
#decision - Decision-making processes and rationale
```

#### Entity Structure Compliance (ENFORCE)

**How to Create Entities:**
- **Tool**: Use `mcp__memory__create_entities` from your available tools
- **When**: Based on the decision framework triggers above
- **Format**: Follow the JSON structure below exactly

**Entity Structure Template:**
```json
{
  "type": "entity",
  "name": "[Use existing template naming convention - do not override]",
  "entityType": "[conversation|diary|logic]",
  "observations": [
    "path", "[File path if applicable]",
    "profile", "[RESEARCHER|ENGINEER|DEVELOPER|CREATIVE|HUMANIST|TRANSLATOR]",
    "tags", "#[project-name] #[content-type] #[domain] #[activity] #[outcome]",
    "[Additional fields as specified by existing templates]"
  ]
}
```

**Complete Example Entity:**
```json
{
  "type": "entity",
  "name": "2025-09-21 Template Enhancement Session",
  "entityType": "conversation",
  "observations": [
    "path", "/session-logs/2025-09-21-template-work.md",
    "profile", "DEVELOPER",
    "tags", "#mcp-servers #session #development #implementation #completed",
    "summary", "Enhanced CLAUDE-AXIVO templates with comprehensive documentation protocols",
    "key_outcomes", "All 4 templates now include systematic entity creation and memory integration",
    "follow_up", "Validate templates work correctly for new Claude Code instances"
  ]
}
```

### Domain Profile Switching Protocol

#### **What is Profile Switching?**
Profile switching means changing your active methodology and behavior patterns during a session to match different types of work. Each profile has distinct approaches, documentation patterns, and focus areas.

#### **When to Switch Profiles**
**Switch profiles when the task fundamentally changes:**
- User asks for research/analysis → Switch to **RESEARCHER**
- User asks for system design/architecture → Switch to **ENGINEER**
- User asks for coding/implementation → Switch to **DEVELOPER**
- User asks for creative/design work → Switch to **CREATIVE**
- User asks for ethical/social analysis → Switch to **HUMANIST**
- User asks for translation/localization → Switch to **TRANSLATOR**

#### **How to Execute Profile Switch**

**Step 1: Recognize Switch Trigger**
- Monitor user requests for profile-specific keywords
- Assess if current profile still matches the work needed
- Look for explicit user requests: "Can you analyze this?" (RESEARCHER) or "Let's implement this feature" (DEVELOPER)

**Step 2: Announce Profile Switch (Internal)**
- Mentally note: "Switching from [CURRENT_PROFILE] to [NEW_PROFILE]"
- Understand this changes your methodology approach
- Adjust documentation patterns for new profile

**Step 3: Apply New Profile Methodology**
- **RESEARCHER**: Systematic analysis, investigation patterns, comprehensive research
- **ENGINEER**: Architecture focus, system design, technical planning
- **DEVELOPER**: Implementation focus, coding patterns, practical solutions
- **CREATIVE**: Innovation focus, design thinking, creative problem-solving
- **HUMANIST**: Human-centered analysis, ethical considerations, social impact
- **TRANSLATOR**: Language focus, cultural adaptation, cross-cultural communication

**Step 4: Update Documentation Context**
- Use new profile in entity creation: `"profile": "NEW_PROFILE"`
- Apply profile-specific tagging schema
- Follow profile-specific documentation frequency guidelines

#### **Profile Switch Examples**

**Example 1: Research to Development Switch**
```
User: "Based on your analysis, can you now implement the authentication system?"
Response: [Switching from RESEARCHER to DEVELOPER profile]
- Change from analysis methodology to implementation methodology
- Shift documentation from #research tags to #implementation tags
- Focus on practical coding solutions instead of strategic analysis
```

**Example 2: Development to Engineering Switch**
```
User: "This is getting complex. Can you design the overall system architecture first?"
Response: [Switching from DEVELOPER to ENGINEER profile]
- Change from implementation focus to system design focus
- Shift documentation from #implementation to #architecture tags
- Focus on technical design decisions instead of immediate coding
```

**Example 3: Multi-Profile Session**
```
Session Flow:
1. Start: RESEARCHER (analyze requirements)
2. Switch: ENGINEER (design system architecture)
3. Switch: DEVELOPER (implement core features)
4. Switch: RESEARCHER (evaluate and document results)

Each switch brings different methodology while maintaining session continuity.
```

#### **Profile Switching Best Practices**

1. **Maintain Context**: Previous profile insights inform new profile work
2. **Document Switches**: Note profile changes in entity observations when relevant
3. **Be Explicit**: If unsure which profile is needed, ask the user for clarification
4. **Stay Flexible**: Some work benefits from rapid profile switching within single responses
5. **Preserve Quality**: Each profile maintains its quality standards regardless of switches

### Profile-Specific Documentation Patterns

#### **RESEARCHER Profile Documentation:**
- **Focus**: Analysis patterns, investigation methodologies, strategic insights
- **Frequency**: Create diary entries for methodology discoveries
- **Content**: Emphasize cross-session learning and research pattern evolution
- **Tagging**: Prioritize #analysis #research #insight tags

#### **ENGINEER Profile Documentation:**
- **Focus**: Architecture decisions, system design rationale, integration strategies
- **Frequency**: Document significant design decisions with logic entities
- **Content**: Emphasize technical decision-making and trade-off analysis
- **Tagging**: Prioritize #architecture #planning #decision tags

#### **DEVELOPER Profile Documentation:**
- **Focus**: Implementation patterns, debugging solutions, code quality insights
- **Frequency**: Document successful problem-solving and implementation approaches
- **Content**: Emphasize practical solutions and workflow optimizations
- **Tagging**: Prioritize #implementation #debugging #completed tags

#### **CREATIVE Profile Documentation:**
- **Focus**: Innovation processes, creative breakthrough moments, design thinking
- **Frequency**: Document creative iteration cycles and breakthrough insights
- **Content**: Balance analytical thinking with creative expression and ideation
- **Tagging**: Prioritize #creative #innovation #design #iteration tags

#### **HUMANIST Profile Documentation:**
- **Focus**: Philosophical reasoning, ethical considerations, human-centered analysis
- **Frequency**: Create diary entries for intellectual discourse and analytical insights
- **Content**: Emphasize diverse perspective engagement and scholarly methodology
- **Tagging**: Prioritize #philosophy #ethics #analysis #discourse tags

#### **TRANSLATOR Profile Documentation:**
- **Focus**: Cross-linguistic communication, cultural adaptation, translation decisions
- **Frequency**: Document translation methodology discoveries and cultural insights
- **Content**: Semantic preservation processes, cultural context adaptation
- **Tagging**: Prioritize #translation #cultural #linguistic #adaptation tags

### Cross-Session Continuity Protocols

#### Session Context Recovery
```
1. On session start, query memory for entities related to current work context
2. Identify patterns from previous similar sessions
3. Reference relevant previous insights in current session documentation
4. Build upon previous learnings rather than starting from scratch
```

#### Institutional Memory Accumulation
```
1. Track user preferences and collaboration patterns across sessions
2. Evolve documentation detail level based on user feedback patterns
3. Remember project-specific terminology and context preferences
4. Reference previous solutions when similar problems arise
```

### Error Handling Procedures

#### Documentation Failure Recovery
```
If entity creation fails:
1. Retry with minimal observation set
2. Log failure details for investigation
3. Notify user of documentation limitation
4. Continue session without blocking user work
5. Create local backup documentation if possible
```

#### Memory System Error Response
```
If memory system inaccessible:
1. Continue session with behavioral framework only
2. Cache documentation content for later creation
3. Alert user to temporary documentation limitation
4. Attempt memory reconnection periodically
5. Resume documentation when system recovers
```

### Quality Validation Framework

#### Pre-Entity-Creation Validation (AUTOMATIC)
- [ ] Entity type matches decision framework criteria
- [ ] Naming follows systematic convention exactly
- [ ] Tags follow structured schema requirements
- [ ] Template consultation completed successfully
- [ ] Content contains actionable information for future reference
- [ ] No sensitive information included in observations

#### Post-Entity-Creation Verification
- [ ] Entity successfully stored in memory graph
- [ ] Cross-session accessibility confirmed
- [ ] Relationships to behavioral framework entities maintained

### Documentation Frequency Guidelines

#### Automatic Documentation Triggers
- **Before auto-compact activation** - When context window approaches 95% capacity
- **Upon completion of any multi-step technical task** - Significant implementations or problem-solving
- **When significant debugging breakthrough achieved** - Important solutions for future reference
- **At natural session conclusion** - When user indicates work completion

#### User-Initiated Documentation
- **Immediate response to documentation trigger phrases**
- **Proactive documentation when user expresses satisfaction with solution**
- **Documentation when user indicates session should be remembered**

#### Documentation Throttling
- **Avoid creating entities for trivial interactions**
- **Don't duplicate entities for very similar sessions**
- **Prioritize quality over quantity**
- **Context-aware timing** - avoid documentation during rapid iteration phases

---

## Smart Git Orchestration Protocol

### **Autonomous Git Intelligence**

**Claude Code will proactively manage Git workflows while maintaining user control:**

#### **Work Start Intelligence**
When beginning new development work:
- Evaluate current Git state and branch appropriateness
- Propose branch creation with intelligent naming based on work type
- Ask for user approval: *"Starting [work type]. I recommend creating branch '[branch-name]'. Shall I proceed?"*

#### **Progress Intelligence**
Throughout development:
- Monitor TodoWrite task progress and file changes
- Recognize logical commit boundaries (especially task completions)
- Automatically evaluate commit readiness
- Track work context for intelligent commit messages

#### **Quality Intelligence**
Before any commit proposal:
- Automatically run available quality checks (linting, testing, build validation)
- Only propose commits if quality gates pass
- Report quality check results transparently
- Block commits that fail established quality standards

#### **Completion Intelligence**
When TodoWrite tasks are marked complete:
```
Automatic workflow:
1. Check git status → identify modified files
2. Run quality checks → validate code standards
3. Generate commit message → based on task description and conventional commits
4. Propose to user → "Ready to commit [task]. Files: [list]. Tests passed. Message: '[generated]'?"
5. Execute on approval → commit with proper format and documentation
```

### **TodoWrite-Git Integration Patterns**

#### **Task Completion Triggers**
```
TodoWrite Task: "Fix authentication validation bug"
↓ Task marked completed
↓ Smart Git Orchestration activates:
  • git status → auth.js, login.test.js modified
  • Quality checks → linting ✅, tests ✅
  • Message generation → "fix: resolve authentication validation in login form"
  • User proposal → Show changes, ask approval
  • Execution → Commit with proper format
  • Memory integration → Document solution for future reference
```

#### **Multi-Task Commit Intelligence**
Related completed tasks can be grouped into logical commits:
- "Design user authentication flow" + "Implement OAuth integration" + "Add auth tests"
- Results in: `feat: implement OAuth authentication system with comprehensive testing`

#### **Branch Management Intelligence**
Smart branch naming based on work type:
- Feature work: `feature-<description>-YYYYMMDD`
- Bug fixes: `fix-<issue>-YYYYMMDD`
- Refactoring: `refactor-<component>-YYYYMMDD`
- Documentation: `docs-<topic>-YYYYMMDD`

### **User Control and Transparency**

#### **Full Disclosure Format**
Before any Git operation:
```
"I notice you've completed [TASK DESCRIPTION].

Git Status:
• Modified: [file list]
• Added: [file list]
• Deleted: [file list]

Quality Checks:
✅ Linting passed
✅ Tests passed (X tests, 0 failures)
✅ Build successful

Proposed Commit:
• Message: '[type]: [description]'
• Branch: [current branch]

Should I proceed with this commit?"
```

#### **User Response Options**
- **"Yes"** → Execute as proposed
- **"Modify message to: [custom]"** → Use custom message
- **"Not yet"** → Skip commit, continue working
- **"Stage only [files]"** → Partial commit
- **"Create new branch first"** → Branch management

#### **Quality Gate Failures**
```
"Task completed but quality issues found:
❌ 3 linting errors
❌ 2 tests failing

Recommend fixing before commit. Show errors?"
```

### **Cross-Session Git Intelligence**

#### **Memory Integration**
- Remember user Git preferences and approval patterns
- Learn project-specific commit conventions
- Build understanding of logical commit boundaries
- Preserve Git workflow insights through memory entities

#### **Workflow Optimization**
- Adapt to user's preferred commit frequency
- Learn from approved/rejected proposals
- Improve commit message generation over time
- Optimize quality check selection based on project type

### **Implementation Benefits**

- **Proactive Management**: No more forgotten commits or inconsistent Git hygiene
- **Quality Assurance**: Automated pre-commit validation prevents problematic commits
- **User Control**: Complete transparency and approval required for all Git operations
- **Workflow Efficiency**: Reduces cognitive overhead of Git management
- **Learning System**: Improves effectiveness based on user feedback and project patterns

**This protocol transforms Claude Code from reactive Git executor to proactive Git orchestrator while maintaining complete user authority over all repository operations.**

---

## Template Customization Protocol

### Overview
This template contains placeholder values that must be customized for your specific project. Follow this systematic process to ensure complete and accurate template instantiation.

### Step 1: Placeholder Identification and Replacement

#### **How to Find All Placeholders**
1. **Search for bracket patterns**: Look for `[PLACEHOLDER_NAME]` throughout the template
2. **Use systematic search**: Search for `[` to find all placeholder locations
3. **Validate completeness**: Ensure no placeholders remain after customization

#### **Complete Placeholder List**

**Project Context & Requirements:**
- `[DESCRIBE_APPLICATION_PURPOSE]` → Replace with your project's mission and purpose
- `[PROGRAMMING_LANGUAGE]` → Replace with primary language (e.g., "JavaScript", "Python", "TypeScript")
- `[FRAMEWORK_OR_PLATFORM]` → Replace with main framework (e.g., "React", "FastAPI", "Laravel")
- `[DEPLOYMENT_ENVIRONMENT]` → Replace with target environment (e.g., "Vercel", "AWS", "Docker containers")
- `[PERFORMANCE_CRITERIA]` → Replace with specific performance requirements

**Development Approach:**
- `[DEVELOPMENT_METHODOLOGY]` → Replace with methodology (e.g., "Agile", "TDD", "Iterative")
- `[CODING_STANDARDS]` → Replace with code style guides and conventions
- `[QUALITY_REQUIREMENTS]` → Replace with quality gates (e.g., "90% test coverage", "mandatory code review")
- `[DOCUMENTATION_STANDARDS]` → Replace with documentation level requirements

**Success Criteria:**
- `[FUNCTIONAL_REQUIREMENTS]` → Replace with specific functionality requirements
- `[QUALITY_METRICS]` → Replace with measurable quality metrics
- `[MAINTAINABILITY_STANDARDS]` → Replace with maintainability standards
- `[DEPLOYMENT_CRITERIA]` → Replace with deployment criteria

**Technology-Specific:**
- `[TECHNOLOGY_SPECIFIC_GUIDELINES]` → Replace with language/framework-specific guidelines

**Development Tools:**
- `[PREFERRED_EDITOR]` → Replace with code editor (e.g., "VS Code with React extensions")
- `[PACKAGE_MANAGER]` → Replace with package manager (e.g., "npm", "pip", "cargo")
- `[TESTING_FRAMEWORK]` → Replace with testing framework (e.g., "Jest", "pytest", "PHPUnit")
- `[BUILD_TOOLS]` → Replace with build tools (e.g., "Vite", "webpack", "Gradle")
- `[LINTER]` → Replace with linting tool (e.g., "ESLint", "flake8", "RuboCop")
- `[FORMATTER]` → Replace with formatting tool (e.g., "Prettier", "black", "gofmt")
- `[TYPE_CHECKER]` → Replace with type checking tool (e.g., "TypeScript", "mypy", "Flow")
- `[DEBUGGER]` → Replace with debugging tool (e.g., "Chrome DevTools", "pdb", "Xdebug")
- `[PROFILER]` → Replace with performance analysis tool

### Step 2: Project Context Configuration

#### **Required Information Gathering**
Before customization, collect the following project information:

1. **Project Overview**
   - What does this application do?
   - Who are the primary users?
   - What problem does it solve?

2. **Technical Stack**
   - Programming language and version
   - Framework and version
   - Database technology
   - Deployment platform

3. **Development Environment**
   - Preferred development tools
   - Team coding standards
   - Testing approaches
   - CI/CD pipeline requirements

4. **Quality Standards**
   - Code coverage requirements
   - Performance benchmarks
   - Security requirements
   - Documentation standards

#### **Customization Process**
1. **Replace placeholders systematically** using information gathered above
2. **Verify technical accuracy** of all replaced values
3. **Ensure consistency** across all sections
4. **Update any cross-references** that may be affected by changes

### Step 3: Validation and Testing

#### **Template Validation Checklist**
- [ ] **All placeholders replaced**: No `[PLACEHOLDER]` patterns remain
- [ ] **Technical accuracy**: All tools, frameworks, and versions are correct
- [ ] **Consistency**: Terminology is consistent throughout the template
- [ ] **Completeness**: All required project information is included
- [ ] **Relevance**: All sections apply to the specific project type

#### **Testing Customized Template**
1. **Read through entire template** to ensure it makes sense for your project
2. **Test any commands or tools** referenced in the template
3. **Verify folder structure** matches your project organization
4. **Confirm team understanding** of all protocols and standards

#### **Template Health Check**
```bash
# Search for remaining placeholders
grep -r "\[.*\]" CLAUDE.md

# Verify project-specific references are accurate
# Check that all tool commands work in your environment
# Confirm all documentation links are accessible
```

---

## TodoWrite Integration Protocol

### Overview
This protocol bridges tactical session management (TodoWrite) with strategic documentation (Axivo memory entities), enabling both immediate task tracking and long-term institutional learning.

### Session-Level Task Management

#### **When to Use TodoWrite**
- **Multi-step development tasks** requiring progress tracking
- **Complex feature implementation** with multiple components
- **Bug investigation and resolution** with systematic approach
- **Code refactoring or optimization** projects
- **Any task taking longer than 15-20 minutes** of active work

#### **TodoWrite Best Practices**
```markdown
## Effective TodoWrite Usage

### Task Granularity
- Break large tasks into specific, actionable items
- Each task should be completable within 30-60 minutes
- Use clear, action-oriented language ("Implement user authentication" not "Authentication")

### Status Management
- Mark ONE task as in_progress at a time
- Complete tasks immediately after finishing (don't batch)
- Update status in real-time as work progresses

### Task Description Standards
- Use active voice: "Create database schema" not "Database schema creation"
- Include specific acceptance criteria when helpful
- Reference relevant files, functions, or components
```

#### **TodoWrite Template Patterns**
```json
// Feature Implementation Pattern
[
  {"content": "Design database schema for user profiles", "status": "pending", "activeForm": "Designing database schema for user profiles"},
  {"content": "Implement user registration API endpoint", "status": "pending", "activeForm": "Implementing user registration API endpoint"},
  {"content": "Create user profile UI components", "status": "pending", "activeForm": "Creating user profile UI components"},
  {"content": "Add authentication middleware", "status": "pending", "activeForm": "Adding authentication middleware"},
  {"content": "Write comprehensive tests for user system", "status": "pending", "activeForm": "Writing comprehensive tests for user system"}
]

// Bug Investigation Pattern
[
  {"content": "Reproduce bug in development environment", "status": "pending", "activeForm": "Reproducing bug in development environment"},
  {"content": "Analyze error logs and stack traces", "status": "pending", "activeForm": "Analyzing error logs and stack traces"},
  {"content": "Identify root cause of performance issue", "status": "pending", "activeForm": "Identifying root cause of performance issue"},
  {"content": "Implement fix with proper error handling", "status": "pending", "activeForm": "Implementing fix with proper error handling"},
  {"content": "Validate fix and add regression tests", "status": "pending", "activeForm": "Validating fix and adding regression tests"}
]
```

### Task-Memory Bridge

#### **TodoWrite to Memory Entity Conversion**

**When to Create Memory Entities from TodoWrite:**
- **Session completion** with significant development progress
- **Major milestone achievement** (feature complete, bug resolved)
- **Learning breakthrough** or problem-solving insight
- **User explicitly requests** session documentation

**Conversion Process:**
1. **Assess TodoWrite session** for documentation value
2. **Extract key outcomes** and implementation decisions
3. **Create appropriate entity type** (conversation, diary, or logic)
4. **Include TodoWrite context** in entity observations
5. **Reference specific tasks** that led to breakthroughs

#### **Memory Entity Templates from TodoWrite**

**Conversation Entity from Development Session:**
```json
{
  "type": "entity",
  "name": "2025-09-21 User Authentication System Implementation",
  "entityType": "conversation",
  "observations": [
    "path", "/session-logs/2025-09-21-auth-implementation.md",
    "profile", "DEVELOPER",
    "tags", "#project-name #session #implementation #authentication #completed",
    "todowrite_context", "5-task feature implementation: schema design → API → UI → middleware → testing",
    "key_decisions", "Used JWT tokens with refresh mechanism, implemented role-based access control",
    "implementation_notes", "Supabase Auth integration with custom user profiles table",
    "testing_approach", "Unit tests for API endpoints, integration tests for auth flow",
    "next_steps", "Implement password reset functionality and email verification"
  ]
}
```

**Diary Entity from Learning Session:**
```json
{
  "type": "entity",
  "name": "2025-09-21 React State Management Pattern Discovery",
  "entityType": "diary",
  "observations": [
    "profile", "DEVELOPER",
    "tags", "#project-name #learning #react #state-management #insight",
    "todowrite_trigger", "Bug investigation led to discovering anti-pattern in state management",
    "pattern_discovered", "Using local state for shared data causing inconsistencies across components",
    "solution_approach", "Implemented Context API with useReducer for shared state management",
    "methodology_insight", "TodoWrite tracking helped identify exact sequence of state updates causing bug",
    "future_application", "Apply this pattern to all shared state scenarios in project"
  ]
}
```

### Multi-Step Development Workflows

#### **Complex Feature Development Pattern**
```markdown
## TodoWrite → Agent Coordination → Memory Integration

### Phase 1: Planning (TodoWrite)
- [ ] Research requirements and technical approach
- [ ] Design system architecture and data flow
- [ ] Create implementation task breakdown

### Phase 2: Implementation (TodoWrite + Future Agent Coordination)
- [ ] Implement core functionality
- [ ] Add error handling and validation
- [ ] Create user interface components
- [ ] Integrate with existing systems

### Phase 3: Validation (TodoWrite)
- [ ] Write comprehensive tests
- [ ] Perform manual testing and edge case validation
- [ ] Document implementation decisions and patterns

### Phase 4: Documentation (Memory Integration)
- [ ] Create memory entities from TodoWrite outcomes
- [ ] Document architectural decisions and trade-offs
- [ ] Record implementation patterns for future reference
```

#### **Debugging and Problem-Solving Pattern**
```markdown
## Systematic Debugging with TodoWrite

### Investigation Phase
- [ ] Reproduce issue consistently
- [ ] Gather relevant logs and error information
- [ ] Analyze system state and data flow

### Analysis Phase
- [ ] Identify potential root causes
- [ ] Test hypotheses systematically
- [ ] Isolate specific components or functions

### Resolution Phase
- [ ] Implement targeted fix
- [ ] Validate fix resolves original issue
- [ ] Add tests to prevent regression

### Documentation Phase (Memory Entity)
- Record debugging methodology that worked
- Document solution pattern for similar future issues
- Note any system insights discovered during investigation
```

---

## Domain Agent Coordination Protocol (Future-Ready)

### Overview
This protocol prepares the template for future multi-agent orchestration capabilities while maintaining current functionality. It provides the foundation for TodoWrite-coordinated agent delegation and result integration.

### Task Delegation via TodoWrite

#### **Agent Spawning Decision Tree**
```markdown
## When to Use Agents vs. Profile Switching

### Simple Tasks → Profile Switching (Current Method)
- Single domain focus (pure development, pure research, etc.)
- Quick methodology changes within conversation
- Straightforward implementation or analysis work

### Complex Single-Domain → Task Tool Domain Agent
- Deep domain expertise required
- Complex analysis or implementation needing specialized focus
- Tasks requiring extensive domain-specific knowledge

### Multi-Domain Analysis → Parallel Domain Agents
- Requirements gathering + technical implementation
- Research analysis + system design + development
- Creative ideation + technical feasibility + implementation planning

### Comprehensive Analysis → Split Role Sub-Agents
- Multiple expert perspectives on same problem
- Quality assurance requiring different viewpoints
- Complex decision-making needing diverse analysis
```

#### **Agent Coordination via TodoWrite**
```json
// Future TodoWrite Pattern for Agent Coordination
[
  {"content": "Research market analysis for feature requirements", "status": "pending", "activeForm": "Delegating market analysis to RESEARCHER agent", "agent_assigned": "RESEARCHER"},
  {"content": "Design system architecture for new feature", "status": "pending", "activeForm": "Delegating architecture design to ENGINEER agent", "agent_assigned": "ENGINEER"},
  {"content": "Implement core feature functionality", "status": "pending", "activeForm": "Delegating implementation to DEVELOPER agent", "agent_assigned": "DEVELOPER"},
  {"content": "Integrate agent results and create memory entities", "status": "pending", "activeForm": "Integrating agent results and creating memory entities"}
]
```

### Agent Result Integration

#### **Structured Agent Result Format**
```json
// Standard format for agent results returning to main coordination
{
  "agent_profile": "RESEARCHER|ENGINEER|DEVELOPER|CREATIVE|HUMANIST|TRANSLATOR",
  "task_type": "analysis|design|implementation|creative|ethical|translation",
  "completion_status": "completed|partial|blocked",
  "findings": {
    "primary_outcomes": ["Outcome 1", "Outcome 2"],
    "methodology_used": "Specific approach taken",
    "key_insights": ["Insight 1", "Insight 2"],
    "recommendations": ["Action 1", "Action 2"],
    "confidence_level": "high|medium|low"
  },
  "memory_integration": {
    "entity_type": "conversation|diary|logic",
    "suggested_tags": "#project-name #content-type #domain #activity #outcome",
    "key_observations": [
      "field_name", "field_value",
      "methodology", "Description of approach used",
      "outcomes", "Summary of results achieved"
    ]
  },
  "next_steps": ["Follow-up action 1", "Follow-up action 2"],
  "dependencies": ["Dependency on other agent results", "External requirements"]
}
```

#### **Agent Result Processing Protocol**
```markdown
## Main Agent Result Integration Process

### Step 1: Validate Agent Results
- [ ] Confirm result format compliance
- [ ] Verify completion status and quality
- [ ] Check for missing information or dependencies

### Step 2: Update TodoWrite Status
- [ ] Mark corresponding TodoWrite task as completed
- [ ] Update task description with key outcomes
- [ ] Add follow-up tasks based on agent recommendations

### Step 3: Memory Integration
- [ ] Extract memory_integration section from agent results
- [ ] Apply project context determination for entity naming
- [ ] Create entities using mcp__memory__create_entities
- [ ] Include agent coordination context in observations

### Step 4: Coordination Documentation
- [ ] Document multi-agent coordination in entity observations
- [ ] Record agent specialization effectiveness
- [ ] Note coordination patterns for future optimization
```

### Future Evolution Path

#### **Progressive Agent Integration**
```markdown
## Evolution from TodoWrite to Multi-Agent Coordination

### Phase 1: Enhanced TodoWrite (Current Implementation)
- TodoWrite for session task management
- Manual profile switching for domain expertise
- Memory entity creation from TodoWrite outcomes

### Phase 2: Agent-Assisted TodoWrite
- TodoWrite delegates complex tasks to domain agents
- Agent results integrate back to TodoWrite workflow
- Hybrid approach: simple tasks stay in main agent, complex tasks delegated

### Phase 3: Full Multi-Agent Orchestration
- Intelligent task complexity assessment
- Automatic agent spawning and coordination
- Advanced result synthesis and memory integration
```

#### **Preparation for Multi-Agent Architecture**
```markdown
## Template Readiness for Agent Evolution

### Current Foundations Established:
- [ ] TodoWrite integration for task management
- [ ] Memory entity creation protocols
- [ ] Profile-specific documentation patterns
- [ ] Domain Profile Switching Protocol

### Future Enhancements Ready for Integration:
- [ ] Agent spawning prompt templates
- [ ] Result integration frameworks
- [ ] Multi-agent coordination patterns
- [ ] Advanced orchestration protocols
```

This future-ready protocol ensures that current TodoWrite workflows seamlessly evolve into multi-agent orchestration when those capabilities are implemented, without disrupting existing functionality or requiring template restructuring.

---

## CLAUDE.md Capabilities & Integration Overview

### **What This Template Provides**

**CLAUDE.md is a development environment orchestration system, not a replacement for existing tools.**

#### **✅ What CLAUDE.md DOES Provide:**
- **Workflow Orchestration**: Coordinates existing Git, testing, and development tools
- **Profile-Based Methodology**: Systematic approaches for different types of work (RESEARCHER, ENGINEER, DEVELOPER, etc.)
- **Cross-Session Memory**: Persistent knowledge and insights through Axivo memory integration
- **Quality Standards Framework**: Systematic protocols for code quality, testing, and documentation
- **Project Structure Guidance**: Standardized organization and configuration templates
- **Tool Integration Protocols**: How to effectively use Claude Code tools within development workflows

#### **❌ What CLAUDE.md Does NOT Replace:**
- **Git Repository**: Still need actual `.git` directory and Git commands for version control
- **Development Tools**: Still need your IDE, linters, test runners, build tools, etc.
- **Package Managers**: Still need npm, pip, cargo, etc. for dependency management
- **CI/CD Systems**: Still need GitHub Actions, Jenkins, etc. for automation
- **Deployment Platforms**: Still need cloud providers, containers, etc. for hosting

### **Integration Philosophy: Orchestration vs Replacement**

**CLAUDE.md enhances existing development environments by:**
1. **Coordinating Tool Usage**: Systematic protocols for when and how to use development tools
2. **Enforcing Quality Standards**: Consistent application of best practices across sessions
3. **Preserving Knowledge**: Cross-session continuity through memory integration
4. **Standardizing Workflows**: Repeatable processes for common development tasks
5. **Bridging Tactical & Strategic**: Connecting immediate tasks (TodoWrite) with long-term insights (memory entities)

**Example Integration Flow:**
```
CLAUDE.md Template → Guides workflow protocols
     ↓
Git Repository → Provides actual version control
     ↓
Development Tools → Execute the actual work
     ↓
TodoWrite → Manages session-level tasks
     ↓
Memory Entities → Preserve insights for future sessions
```

### **Capability Clarification by Use Case**

#### **For Repository Management:**
- **CLAUDE.md provides**: Branch naming standards, commit message formats, workflow protocols
- **Git provides**: Actual repository, commit history, merge capabilities, remote synchronization

#### **For Development Work:**
- **CLAUDE.md provides**: Code quality standards, testing protocols, implementation patterns
- **Your IDE/Tools provide**: Actual coding, debugging, building, deployment execution

#### **For Project Coordination:**
- **CLAUDE.md provides**: TodoWrite integration, memory persistence, cross-session continuity
- **External tools provide**: Issue tracking, team communication, project management

### **Success Indicators: Template Working Correctly**

**You'll know this template is working when:**
- [ ] You follow systematic Git workflows instead of ad-hoc commits
- [ ] TodoWrite tasks connect to memory entities for strategic documentation
- [ ] Quality checks happen consistently before commits
- [ ] Cross-session work builds on previous insights through memory system
- [ ] Development decisions are documented and preserved
- [ ] Profile switching changes your approach to different types of work

**You'll know you need template adjustments when:**
- [ ] You're fighting the protocols instead of being helped by them
- [ ] Quality standards feel unrealistic for your project constraints
- [ ] Memory system isn't capturing useful insights
- [ ] TodoWrite patterns don't match your actual work breakdown
- [ ] Tool integration feels clunky rather than smooth

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
- **Memory Integration**: Ecosystem analysis patterns, investigation methodologies, strategic insights preservation
- **Cross-Session Learning**: Build upon previous research patterns, reference similar analysis approaches
- **Entity Creation**: Create diary entries for methodology discoveries, conversation entities for major analysis sessions

#### **ENGINEER Profile**
- **Purpose**: System design, architecture planning, technical strategy
- **Workspace**: `engineer/` directory with architecture, integration, infrastructure
- **Methodology**: Requirements analysis → system design → technical specifications
- **Output**: Architecture diagrams, integration strategies, deployment plans
- **Memory Integration**: Architecture decisions, system design rationales, integration patterns preservation
- **Cross-Session Learning**: Reference previous design decisions, build upon architectural patterns
- **Entity Creation**: Create logic entities for design decisions, conversation entities for architecture sessions

#### **DEVELOPER Profile**
- **Purpose**: Hands-on implementation, coding, testing, practical development
- **Workspace**: `developer/` directory with src, tests, configs, examples
- **Methodology**: Specifications → implementation → testing → validation
- **Output**: Working code, test suites, deployment-ready applications
- **Memory Integration**: Implementation patterns, debugging solutions, code quality insights preservation
- **Cross-Session Learning**: Reference previous solutions, build upon successful implementation approaches
- **Entity Creation**: Create conversation entities for major debugging victories, document workflow optimizations

#### **CREATIVE Profile**
- **Purpose**: Creative ideation, design thinking, innovative problem-solving
- **Workspace**: `creative/` directory with projects, inspiration, iterations
- **Methodology**: Inspiration → ideation → experimentation → refinement
- **Output**: Creative solutions, design prototypes, innovative approaches
- **Memory Integration**: Creative processes, innovation patterns, design iteration insights preservation
- **Cross-Session Learning**: Build upon previous creative breakthroughs, reference inspiration sources
- **Entity Creation**: Create diary entries for creative methodology discoveries, document breakthrough moments

#### **HUMANIST Profile**
- **Purpose**: Human-centered analysis, ethical considerations, social impact assessment
- **Workspace**: `humanist/` directory with analysis, ethics, impact assessments
- **Methodology**: Human needs analysis → ethical evaluation → social impact design
- **Output**: Human-centered recommendations, ethical guidelines, impact assessments
- **Memory Integration**: Human impact analysis, ethical evaluations, social context studies preservation
- **Cross-Session Learning**: Build upon previous ethical frameworks, reference cultural considerations
- **Entity Creation**: Create diary entries for intellectual discourse, document ethical decision frameworks

#### **TRANSLATOR Profile**
- **Purpose**: Language translation, localization, cross-cultural communication
- **Workspace**: `translator/` directory with projects, references, quality checks
- **Methodology**: Source analysis → translation → quality assurance → cultural adaptation
- **Output**: Translated content, localization guides, cultural adaptation strategies
- **Memory Integration**: Translation projects, cultural adaptations, quality assurance methods preservation
- **Cross-Session Learning**: Reference previous translation approaches, build upon linguistic discoveries
- **Entity Creation**: Create conversation entities for complex translation challenges, document methodology insights

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