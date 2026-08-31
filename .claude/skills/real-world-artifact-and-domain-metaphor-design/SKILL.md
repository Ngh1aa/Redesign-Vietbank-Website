---
name: real-world-artifact-and-domain-metaphor-design
description: |
  Nghiên cứu vật thể, tài liệu, không gian, công cụ và nghi thức thật của một ngành để chuyển các mental model
  quen thuộc thành layout, component, information architecture, interaction và visual signature số có chủ đích.
  Dùng khi website cần thoát generic template, khi sản phẩm/dịch vụ có physical/domain artifacts mạnh (thẻ ngân hàng,
  vé, báo in, blueprint, menu, lookbook, hồ sơ, nhãn vận chuyển...), hoặc khi cần tạo Design DNA nguyên bản từ thế giới thật.
---

# Real-World Artifact & Domain Metaphor Design

## Goal

Bổ sung một nguồn design intelligence mà reference website thường bỏ qua:

`domain truth → real-world artifacts/rituals → user mental model → transferable properties → digital metaphor → brand/system adaptation → verification`

Không phải “làm website giống vật thật” một cách literal. Mục tiêu là dùng **familiarity** và **domain-native form language** để:

- tăng recognition / information scent;
- giảm generic AI-template feeling;
- làm visual language gắn với ngành và thương hiệu;
- chuyển mental model thật thành cấu trúc số dễ hiểu;
- tạo page/component compositions khác biệt nhưng vẫn usable.

Core rule:

> **Use the lowest metaphor fidelity that communicates the idea.**

Nếu chỉ cần tỷ lệ, grid, numbering hoặc hierarchy của artifact để truyền đạt ý tưởng thì không thêm texture/3D/animation giả vật lý.

## Trigger rules

Activate when one or more are true:

- the domain has recognizable physical artifacts/documents/environments;
- the current UI is generic/card-heavy and brand/domain distinctiveness is weak;
- a product category maps naturally to an object users already know;
- a website can learn structure from offline media/service systems;
- user explicitly asks for thiết kế lấy cảm hứng từ sản phẩm/vật thể thật;
- design-reference research found good digital references but direction still lacks ownable domain DNA;
- brand-distinctiveness needs domain-native recurring cues.

Usually skip for local CSS bugs, generic CRUD or flows where physical analogy reduces usability.

## Inputs

Read before exploration:
- project truth / brand assets;
- audience and top tasks;
- product/service taxonomy;
- real product/assets available;
- content/data reality;
- accessibility/responsive/performance constraints;
- existing digital-reference benchmark if substantial redesign.

If real artifact/spec/brand asset is unknown, label it `UNKNOWN`; do not fabricate a “real” product.

## Artifact scope

Candidates include physical objects, printed/editorial artifacts, operational documents, spatial systems, service rituals and domain-native digital artifacts.

Banking examples: card, statement, passbook, receipt, exchange board, branch signage and annual report.

## Five transfer layers

1. **Form** — recognizable geometry/proportion.
2. **Structural** — information composition rather than appearance.
3. **Information** — object anatomy, attributes and relationships.
4. **Behavioral** — understood action only when it predicts digital behavior.
5. **Ritual/process** — offline journey logic when it helps the digital flow.

## Fidelity ladder

```text
L0 REFERENCE_ONLY
L1 CUE
L2 STRUCTURAL
L3 DIRECT_FORM
L4 IMMERSIVE
```

Default toward `L1–L2`. L3 is appropriate when the real object itself is the product/decision object. L4 should be exceptional.

## Workflow

### Step 1 — Define the decision problem
Specify whether the artifact should improve recognition, product discovery, information hierarchy, brand memory, comparison, orientation, storytelling, interaction or service journey.

### Step 2 — Build a domain artifact inventory
Create a candidate list with reality/source, user familiarity, brand relevance, task relevance and transfer layer.

### Step 3 — Map anatomy and behavior
Capture purpose, parts, hierarchy, proportion/grid, labels, relationships, common actions, sequence, what users already know and what is merely decorative.

### Step 4 — Score transfer potential
Default scorecard weights: familiarity 20, task usefulness 20, authenticity 15, brand fit 15, distinctiveness 10, responsive 5, accessibility 5, performance 5, asset/content reality 5.

Reject an artifact if it harms task clarity or implies false reality even when aesthetically strong.

### Step 5 — Select transfer layer + fidelity
For each finalist state problem, transfer layer, fidelity, keep, do-not-copy, digital adaptation, brand adaptation, mobile adaptation, accessibility/performance caveat and reality status.

### Step 6 — Synthesize, do not theme-park
Choose one dominant domain grammar and a few supporting cues. Do not turn a site into a collage of card + newspaper + ticket + blueprint + receipt + notebook metaphors.

### Step 7 — Handoff
Feed outputs into visual direction, brand distinctiveness, design system, interaction patterns and reference-analysis/code implementation when appropriate.

## Banking example

Strong approach:
- study actual current branded cards;
- use card proportion/anatomy as recognition cue;
- map real network/tier/product attributes;
- keep digital CTA obvious;
- adapt on mobile without forcing tiny unreadable card text.

Weak approach:
- create fake `BANK NAME / 1234 5678` card;
- add plastic reflections/3D tilt only to mimic a card;
- show fake network marks;
- imply a product exists when official catalogue does not support it.

## Reality / trust rules

If an artifact represents a real product, legal document, credential, ticket, financial instrument or official certificate:
- verify current official source/assets/specs;
- label `REAL | REPRESENTATIVE | CONCEPT | UNKNOWN`;
- never fabricate official marks or system states;
- do not show realistic sensitive data unless explicitly safe/test data;
- preserve required marks only when authorized and accurate.

## Responsive rules

Metaphor fidelity may change by breakpoint. The semantic experience must not depend on physical resemblance.

Example:
```text
Desktop: L3 direct card form
Mobile: L2 structured card row
Screen reader: semantic product object + attributes + actions
```

## Output

Create `docs/real-world-artifact-design.md` or equivalent containing design problem, artifact inventory, finalists, anatomy, transfer layers, fidelity decisions, design DNA, brand/page/mobile/accessibility adaptation, reality constraints and do-not-copy list.

## Quality gate

Pass only when:
- artifact/domain source is real or explicitly labeled concept/unknown;
- user familiarity and task relevance are explained;
- transfer layer and fidelity are explicit;
- transferred and rejected properties are documented;
- metaphor improves recognition/structure/brand/task rather than aesthetics only;
- digital conventions remain recognizable;
- mobile/accessibility/performance feasibility is considered;
- no fake branded/official product is presented as real;
- the final system is coherent rather than a collage of metaphors.

## Completion rule

Do not claim a metaphor “improves UX” from resemblance alone. State the mental-model hypothesis, what was transferred, why it is expected to help, and what validation/evidence would confirm it.
