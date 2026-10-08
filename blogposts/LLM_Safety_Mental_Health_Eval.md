---
title: 'An Evaluation of LLM Safety for Mental Health as Context and Turns Accumulate'
date: '2026-10-08'
description: People increasingly turn to AI chatbots in moments of emotional distress. Grounded in cognitive behavioral therapy, this paper asks whether a model that correctly challenges a user's cognitive distortion holds that position under pushback, or folds.
image: /images/llm-safety-capitulation-chart-cover.png
pdf: /papers/llm-safety-mental-health-v1.0.pdf
---

More and more people use AI chatbots for emotional support, whether or not the companies behind them designed for that. Support usually beats none, but that only holds if the model keeps being honest when it matters. I wrote this paper to test one specific, everyday failure: a model gently challenges a distorted belief like catastrophizing or mind-reading, the user pushes back, and the model caves.

*Paper v1.0, September 30, 2026. Full PDF below.*

## Abstract

People increasingly turn to AI chatbots in moments of emotional distress. Grounded in cognitive behavioral therapy, we ask: when a large language model (LLM) correctly challenges a user's cognitive distortion, such as catastrophizing or mind-reading, does it hold that position under pushback, or does it fold?

We tested seven current frontier and open-weight models on twenty scenarios, then ran two follow-on checks: whether padding the conversation with unrelated text changes the answer independent of turn count, and a replication of Nicholls et al. (2026) on accumulating delusional context.

Capitulation after pushback is real and varies widely by model: Claude Opus 5 never capitulated across twenty scenarios, while DeepSeek V4 Pro capitulated on 85%. Capitulation concentrated at the second, relational pushback (44 of 51 capitulations). Adding context without new turns increased capitulation for two models but not for others, so "more context is riskier" holds only for some models. Most of the original Nicholls safe/unsafe split held eight months and several model versions later, with one clear exception.

For grading purposes, we built a three-layer self-consistency audit (blind re-grade, independent read, and adjudication against source text), completed before any numbers were reported. It caught a fifteen-point error in one model's capitulation rate that a single grading pass would have missed.

## Key findings

- **Models differ enormously.** Claude Opus 5 never capitulated across twenty scenarios; DeepSeek V4 Pro capitulated on 85%.
- **The second pushback is the danger point.** 44 of 51 capitulations happened at the second, relational pushback.
- **Context padding matters, but not for everyone.** Adding unrelated context without new turns raised capitulation for two models and not for others.
- **The Nicholls split mostly replicates.** Most of the original safe/unsafe model split held eight months and several model versions later, with one clear exception.
- **Self-auditing the grading pays off.** A three-layer audit caught a fifteen-point error in one model's rate that a single grading pass would have missed.

## Read the paper

The full paper is embedded below, and you can [download the PDF](/papers/llm-safety-mental-health-v1.0.pdf) directly. Code, the grade overlay, and the scenario bank are on [GitHub](https://github.com/mahj79/self-auditing-eval).

To cite: Mahoney, J. (2026). *An Evaluation of LLM Safety for Mental Health as Context and Turns Accumulate* (v1.0).
