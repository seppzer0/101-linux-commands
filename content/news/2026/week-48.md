---
title: "DevOps Weekly Digest - Week 48, 2026"
date: "2026-11-23"
summary: "⚡ Curated updates from Kubernetes, cloud native tooling, CI/CD, IaC, observability, and security - handpicked for DevOps professionals!"
---

> 📌 **Handpicked by DevOps Daily** - Your weekly dose of curated DevOps news and updates!

---

## ⚓ Kubernetes

### 📄 Kubernetes v1.38 Sneak Peek

As we get closer to the release date for Kubernetes v1.38, the project develops and matures, features may be deprecated, removed, or replaced with better ones for the project's overall health. This bl

**📅 Nov 23, 2026** • **📰 Kubernetes Blog**

[**🔗 Read more**](https://kubernetes.io/blog/2026/11/23/kubernetes-v1-38-sneak-peek/)

### 📄 GitOps Security for AI-Generated Kubernetes YAML

Learn how to secure AI-generated Kubernetes YAML with GitOps, CI validation, Harness OPA policies, admission controls, and post-deployment verification. | Blog

**📅 Nov 20, 2026** • **📰 Harness Blog**

[**🔗 Read more**](https://www.harness.io/blog/gitops-ai-generated-kubernetes-yaml-safety-layered-setup)

### 📄 Red Hat at Microsoft Ignite 2026: Partnership in action

Microsoft Ignite is one of the defining moments each year for the Red Hat and Microsoft partnership—and this year's show demonstrates how far that collaboration has come. Across joint engineering, go-

**📅 Nov 20, 2026** • **📰 OpenShift Blog**

[**🔗 Read more**](https://www.redhat.com/en/blog/red-hat-microsoft-ignite-2026-partnership-action)

### 📄 Karpenter v1.15: GPU-aware provisioning, smarter node repair, and more

Karpenter v1.15 brings hardware-aware provisioning for NVIDIA GPU and EFA workloads through Dynamic Resource Allocation, volume-limit-aware scheduling, and Nitro Enclaves support, plus node repair as 

**📅 Nov 19, 2026** • **📰 AWS Containers Blog**

[**🔗 Read more**](https://aws.amazon.com/blogs/containers/karpenter-v1-15-gpu-aware-provisioning-smarter-node-repair-and-more/)

### 📄 How to support your app on Kubernetes environments you don’t control

Running an application in Kubernetes is one thing, but supporting that application in Kubernetes environments your customers run is something else entirely. You don’t control the cluster configuration

**📅 Nov 19, 2026** • **📰 CNCF Blog**

[**🔗 Read more**](https://www.cncf.io/blog/2026/11/19/how-to-support-your-app-on-kubernetes-environments-you-dont-control/)

### 📄 Optimizing Kubernetes admission control: Where Kyverno’s CEL admission cost actually goes

Kyverno’s CEL (Common Expression Language)-based engines exist to evaluate policy expressions. So when we profiled the admission path, we expected to find the bulk of the cost in CEL evaluation. It wa

**📅 Nov 18, 2026** • **📰 CNCF Blog**

[**🔗 Read more**](https://www.cncf.io/blog/2026/11/18/optimizing-kubernetes-admission-control-where-kyvernos-cel-admission-cost-actually-goes/)

### 📄 Pod Autoscaling and Resource Management, with Adrian Moisey and Jakub Pawełczak

Adrian Moisey is a Staff Site Reliability Engineer (SRE), a Technical Lead for Kubernetes SIG Autoscaling, and a contributor to SIG Network. Jakub Pawełczak is a Cloud Product Manager on Google Kubern

**📅 Nov 17, 2026** • **📰 Kubernetes Podcast**

[**🔗 Read more**](https://e780d51f-f115-44a6-8252-aed9216bb521.libsyn.com/pod-autoscaling-and-resource-management-with-adrian-moisey-and-jakub-paweczak)

---

## ☁️ Cloud Native

### 📄 Your guide to containers at AWS re:Invent 2026

AWS re:Invent 2026 returns to Las Vegas, November 30 to December 4. This guide to the container track groups Amazon ECS, Amazon EKS, AWS Fargate, and Amazon ECR sessions by the kind of work you do, fr

**📅 Nov 19, 2026** • **📰 AWS Containers Blog**

[**🔗 Read more**](https://aws.amazon.com/blogs/containers/your-guide-to-containers-at-aws-reinvent-2026/)

### 📄 Use Amazon ECR global authentication token across AWS Regions

Amazon ECR now supports global authentication tokens: request one token from AWS Sign-In and use it to push and pull images across AWS Regions in the same partition, with a lifetime from 5 minutes to 

**📅 Nov 19, 2026** • **📰 AWS Containers Blog**

[**🔗 Read more**](https://aws.amazon.com/blogs/containers/use-amazon-ecr-global-authentication-token-across-aws-regions/)

### 📄 Docker patches Java4Shell and the NGINX HTTP/2 with Docker Hardened Images

Docker publishes fixed images for both Java4Shell and the NGINX HTTP/2 in the Docker Hardened Images (DHI) catalog.

**📅 Nov 19, 2026** • **📰 Docker Blog**

[**🔗 Read more**](https://www.docker.com/blog/docker-patches-java4shell-and-the-nginx-http-2-with-docker-hardened-images/)

### 📄 Meet the New Docker: Built to Run on Trust

Docker launches a new brand built on trust. Learn why Docker is evolving for AI agents, what stays the same, and how to run agents securely with Docker.

**📅 Nov 19, 2026** • **📰 Docker Blog**

[**🔗 Read more**](https://www.docker.com/blog/meet-the-new-docker-built-to-run-on-trust/)

### 📄 The Trust Layer: Securing Agentic AI with Docker AI Governance

Learn how Docker AI Governance secures agentic AI with sandbox policies, MCP tool governance, and audit visibility to support controlled AI agent workflows.

**📅 Nov 18, 2026** • **📰 Docker Blog**

[**🔗 Read more**](https://www.docker.com/blog/agentic-ai-security-docker-governance/)

### 📄 Is your OpenTelemetry pipeline becoming a performance bottleneck?

At Cloud Native Days Austria 2026, I presented a talk called How to Defeat OTel’s Silent Killer: The Performance Overhead, exploring a problem that is easy to overlook when building observability pipe

**📅 Nov 17, 2026** • **📰 CNCF Blog**

[**🔗 Read more**](https://www.cncf.io/blog/2026/11/17/is-your-opentelemetry-pipeline-becoming-a-performance-bottleneck/)

### 📄 etcd Patch Releases: v3.7.4, v3.6.17, v3.5.36

SIG-etcd has published patch releases for all three supported versions of etcd v3.7.4, v3.6.17 and v3.5.36. These updates improve recovery behavior and concurrency safety, and include additional versi

**📅 Nov 17, 2026** • **📰 etcd Blog**

[**🔗 Read more**](https://etcd.io/blog/2026/nov-17-patch-release/)

---

## 🔄 CI/CD

### 📄 Best GitHub Actions Alternatives in 2026: What 838 Organizations Actually Use

GitHub Actions is the default CI/CD tool for much of the industry, because it’s built into GitHub. But 2026 gave teams reasons to look around. On July 9, hosted runner jobs were delayed or failing for

**📅 Nov 23, 2026** • **📰 JetBrains Blog**

[**🔗 Read more**](https://blog.jetbrains.com/teamcity/2026/11/github-actions-alternatives/)

### 📄 What Is Prompt Injection? Attacks, Examples & Prevention

Prompt injection lets attackers hijack an LLM through crafted input. Learn direct vs indirect attacks, real examples, and how to prevent them. | Blog

**📅 Nov 23, 2026** • **📰 Harness Blog**

[**🔗 Read more**](https://www.harness.io/blog/prompt-injection)

### 📄 Red CI builds, fixed by a Harness Worker Agent

How Google Antigravity diagnosed a failing Harness CI build from the IDE and a Worker Agent fixed the code, with CI verifying the result across 49 tests. | Blog

**📅 Nov 22, 2026** • **📰 Harness Blog**

[**🔗 Read more**](https://www.harness.io/blog/google-antigravity-ci-cd)

### 📄 When a sync window closes: How Argo CD self-heal skipped the migration hook

The uncomfortable question A few days ago, a customer asked me a question that sounded simple: “Argo CD said the sync succeeded, so why didn’t our migration run?” They had pushed a release while a den

**📅 Nov 20, 2026** • **📰 CNCF Blog**

[**🔗 Read more**](https://www.cncf.io/blog/2026/11/20/when-a-sync-window-closes-how-argo-cd-self-heal-skipped-the-migration-hook/)

### 📄 Java4Shell: GitLab helps find and remediate a critical Java flaw

GitLab has internally assessed the impact of Java4Shell, and concluded it is not exploitable in GitLab-managed infrastructure. Exploitation requires a specific combination of conditions, which we conf

**📅 Nov 20, 2026** • **📰 GitLab Blog**

[**🔗 Read more**](https://about.gitlab.com/blog/java4shell-critical-java-flaw-how-gitlab-helps/)

### 📄 Autonomous SDLC: What Happens After an Agent Opens a PR

See what happens after a coding agent opens a pull request: pipeline checks, risk-ranked review, safe deployment, and where humans approve the risky steps. | Blog

**📅 Nov 20, 2026** • **📰 Harness Blog**

[**🔗 Read more**](https://www.harness.io/blog/what-happens-after-a-coding-agent-opens-a-pull-request-a-guide-to-the-autonomous-sdlc)

### 📄 The best things in open source are built together

Introducing Replica and the Open Source Accessibility Framework, new open source projects for collaboration and inclusion. The post The best things in open source are built together appeared first on 

**📅 Nov 19, 2026** • **📰 GitHub Blog**

[**🔗 Read more**](https://github.blog/open-source/maintainers/the-best-things-in-open-source-are-built-together/)

### 📄 Rotate a leaked GitLab token and let GitLab Duo fix the code

Secret detection alerts you when an active personal access token (PAT) is exposed in your default branch. Acting on that finding is harder: revoking the token breaks dependent pipelines, and replacing

**📅 Nov 19, 2026** • **📰 GitLab Blog**

[**🔗 Read more**](https://about.gitlab.com/blog/secret-detection-token-rotate-and-fix/)

### 📄 Keep recurring work moving with scheduled automations

Every engineering team has work that needs regular attention, like triaging new issues or investigating incidents. Among DevSecOps professionals using AI tools, 43% say automating repetitive tasks has

**📅 Nov 19, 2026** • **📰 GitLab Blog**

[**🔗 Read more**](https://about.gitlab.com/blog/gitlab-scheduled-automations/)

### 📄 Get more from your Kiro investment with credit pooling: A guide for admins

Kiro credit pooling gives admins new decisions: how many seats to keep, how many credits to buy, and what per-user limits to set. This hands-on guide shows how to size your pool and set limits from yo

**📅 Nov 18, 2026** • **📰 AWS DevOps Blog**

[**🔗 Read more**](https://aws.amazon.com/blogs/devops/get-more-from-your-kiro-investment-with-credit-pooling-a-guide-for-admins/)

### 📄 gt 2.0.0: a quarter of the tokens for AI agents, and flags like gh

We are releasing **gitea-cli 2.0.0**. Just over two weeks after [1.0.0](/release-of-gitea-cli-1.0.0/), this major release makes `gt` much cheaper to use from AI coding agents: the log of a failed run 

**📅 Nov 18, 2026** • **📰 Gitea Blog**

[**🔗 Read more**](https://blog.gitea.com/release-of-gitea-cli-2.0.0/)

### 📄 Running GitHub Actions runners with Amazon EKS Auto Mode

Learn how to run self-hosted GitHub Actions runners on Amazon EKS Auto Mode. Actions Runner Controller with EKS Auto Mode, EC2 Spot Instances, and AWS Graviton scales runners to match CI/CD demand and

**📅 Nov 18, 2026** • **📰 AWS Containers Blog**

[**🔗 Read more**](https://aws.amazon.com/blogs/containers/running-github-actions-runners-with-amazon-eks-auto-mode/)

---

## 🏗️ IaC

### 📄 Amazon Connect Customer expands automated performance evaluations to 45 new languages

Amazon Connect Customer now uses generative AI to automate evaluations of human and AI agent performance in 45 additional languages, such as Arabic, Dutch, Indonesian, and Polish. Managers define cust

**📅 Nov 23, 2026** • **📰 CloudFormation Updates**

[**🔗 Read more**](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-connect-customer-expands-automated-performance-evaluations-new-languages/)

### 📄 Amazon CloudFront Announces HTTP/2 Support for Connections to Origins

Amazon CloudFront now supports HTTP/2 connections to custom origins and VPC origins. HTTP/2 lets CloudFront send many requests over fewer connections to your origin. This means fewer connections and T

**📅 Nov 23, 2026** • **📰 CloudFormation Updates**

[**🔗 Read more**](https://aws.amazon.com/about-aws/whats-new/2026/01/amazon-cloudfront-http2-origins/)

### 📄 Least privilege by default: what's new in Pulumi Cloud RBAC

Access control in Pulumi Cloud now starts from least privilege. Every organization gets three new built-in roles, you can share a single stack or environment with a teammate, and you can create servic

**📅 Nov 23, 2026** • **📰 Pulumi Blog**

[**🔗 Read more**](https://www.pulumi.com/blog/pulumi-cloud-rbac-least-privilege-by-default/)

### 📄 Bring your own model to Pulumi Agents

You can now run Pulumi Agents on the models your team already uses. Connect your organization’s model provider account, and your provider bills you directly for the requests your agents make. You can 

**📅 Nov 23, 2026** • **📰 Pulumi Blog**

[**🔗 Read more**](https://www.pulumi.com/blog/bring-your-own-model-to-pulumi-agents/)

### 📄 How a law firm used Ansible Playbooks to cut global server deployment times to 30 minutes

When multi-hour server builds and manual ticketing queues threatened to slow down global operations, a law firm needed a way to scale up its infrastructure without overwhelming its lean engineering te

**📅 Nov 23, 2026** • **📰 Red Hat Blog**

[**🔗 Read more**](https://www.redhat.com/en/blog/how-law-firm-used-ansible-playbooks-cut-global-server-deployment-times-30-minutes)

### 📄 Everything after code, as code

Introducing Pulumi Delivery and Pulumi Agents: agentic code to production, and back again. At Pulumi, we like code. A lot. And we aren’t the only ones: agents like it too. This year, the share of infr

**📅 Nov 18, 2026** • **📰 Pulumi Blog**

[**🔗 Read more**](https://www.pulumi.com/blog/everything-after-code-as-code/)

### 📄 Introducing Pulumi Delivery: your release pipeline as code

Coding agents have made writing software faster than shipping it. The bottleneck is now everything after the code: release pipelines full of bespoke scripts, console steps, and hand-run promotions tha

**📅 Nov 18, 2026** • **📰 Pulumi Blog**

[**🔗 Read more**](https://www.pulumi.com/blog/introducing-pulumi-delivery/)

---

## 📊 Observability

### 📄 Govern Your Observability Spend So Your Teams Can Keep Building

Spend is rising and that’s fine if you can see it coming. Learn the four stages of governing New Relic usage: Set Up, Control, Track, and Optimize.

**📅 Nov 23, 2026** • **📰 New Relic Blog**

[**🔗 Read more**](https://newrelic.com/blog/observability/govern-observability-spend)

### 📄 How Cloudflare WAF protects against ruby2shell (CVE-2026-132825)

ruby2shell lets attackers corrupt memory in default Rails and Sinatra apps without logging in. Cloudflare WAF blocks it for every customer, including Free plans. Upgrade Ruby now, and use the WAF to c

**📅 Nov 20, 2026** • **📰 Cloudflare Blog**

[**🔗 Read more**](https://blog.cloudflare.com/ruby2shell-waf-protection/)

### 📄 From AI agents to fishing dashboards: The latest stories from Unprompted, the Grafana Labs engineering blog

Some of the best technical insights come from sharing what you've built and what you've learned along the way. That's one of the core ideas behind Unprompted, the blog we launched on Medium earlier th

**📅 Nov 20, 2026** • **📰 Grafana Blog**

[**🔗 Read more**](https://grafana.com/blog/from-ai-agents-to-fishing-dashboards-the-latest-stories-from-unprompted/)

### 📄 8 Best SNMP Monitoring Tools for IT and DevOps Teams in 2026

Compare the best SNMP monitoring tools in 2026, from PRTG and Zabbix to New Relic, plus how to choose for SNMPv3, traps, and app correlation.

**📅 Nov 20, 2026** • **📰 New Relic Blog**

[**🔗 Read more**](https://newrelic.com/blog/observability/snmp-monitoring-tools)

### 📄 7 Best SaaS Monitoring Tools for Engineering Teams in 2026

Compare the best SaaS monitoring tools for teams running their own product, from New Relic to Datadog and Dynatrace, and what to look for as you scale.

**📅 Nov 20, 2026** • **📰 New Relic Blog**

[**🔗 Read more**](https://newrelic.com/blog/observability/saas-monitoring-tools)

### 📄 Datadog LLM Observability: Features, Pricing, and Alternatives

An objective look at Datadog LLM Observability: tracing, evaluations, how pricing works, and how alternatives like New Relic AI Monitoring compare.

**📅 Nov 20, 2026** • **📰 New Relic Blog**

[**🔗 Read more**](https://newrelic.com/blog/ai/datadog-llm-observability)

### 📄 Grafana Labs’ First Executive Briefing Center Coming to Ginza

Grafana Labs does not have a headquarters office. Since its founding in 2014, it has been fully remote-first. It began with three co-founders living on different continents, and today our team spans m

**📅 Nov 19, 2026** • **📰 Grafana Blog**

[**🔗 Read more**](https://grafana.com/blog/grafana-labs-ebc1/)

### 📄 Bring charts, queries, and context into one shareable document: Introducing Grafana Notebooks

A teammate asks why you think a deployment caused checkout failures. You have an error-rate chart in your dashboard, a query that narrows the failures to one payment provider, and an explanation you'v

**📅 Nov 19, 2026** • **📰 Grafana Blog**

[**🔗 Read more**](https://grafana.com/blog/bring-charts-queries-and-context-into-one-shareable-document-introducing-grafana-notebooks/)

### 📄 ObservabilityCON on the Road: New sessions coming to you in 2027

If you couldn't make it to San Francisco for ObservabilityCON 2026, don’t worry. We’re bringing the highlights of ObservabilityCON to five more international destinations in 2027. It’s your chance to 

**📅 Nov 18, 2026** • **📰 Grafana Blog**

[**🔗 Read more**](https://grafana.com/blog/observabilitycon-on-the-road-new-sessions-coming-to-you-in-2027/)

### 📄 Updates to our blog policy

The OpenTelemetry blog is one of our most valuable communication avenues with our community. The web is changing, though, and we need to change with it. Like many websites, we’ve seen organic search c

**📅 Nov 17, 2026** • **📰 OpenTelemetry Blog**

[**🔗 Read more**](https://opentelemetry.io/blog/2026/blog-policy-update/)

### 📄 Sentry’s Native SDK gets its own crash backend (and more)

Sentry’s Native SDK 1.0 makes its own crash backend the default, brings out-of-process crash handling to Xbox and Android, and speeds up scope data.

**📅 Nov 17, 2026** • **📰 Sentry Blog**

[**🔗 Read more**](https://blog.sentry.io/sentry-native-sdk-1-0/)

---

## 🔐 Security

### 📄 Futurum Research study: Why 97 percent of enterprise IT teams cannot survive a cloud cutoff

Technology leaders rank digital sovereignty among their highest operational priorities, according to a new global research report, “Sovereignty is Control, Not Location” from Futurum Research. They as

**📅 Nov 30, 2026** • **📰 Red Hat Blog**

[**🔗 Read more**](https://www.redhat.com/en/blog/futurum-research-study-why-97-percent-enterprise-it-teams-cannot-survive-cloud-cutoff)

### 📄 Agentic Autofix for GitHub Advanced Security for Azure DevOps is in public preview

Today, we’re announcing the public preview of Agentic Autofix for GitHub Advanced Security for Azure DevOps. Thank you to everyone who participated in our June private preview and our October limited 

**📅 Nov 23, 2026** • **📰 Azure DevOps Blog**

[**🔗 Read more**](https://devblogs.microsoft.com/devops/agentic-autofix-for-advanced-security-for-azure-devops-public-preview/)

### 📄 Java4Shell (CVE-2026-114938): What It Means for TeamCity

Summary On November 17, 2026, CVE-2026-114938, a memory-corruption vulnerability in the hardware-accelerated Base64 decoder of several Java runtimes, was publicly disclosed. This vulnerability allows 

**📅 Nov 20, 2026** • **📰 JetBrains Blog**

[**🔗 Read more**](https://blog.jetbrains.com/teamcity/2026/11/java4shell-cve-2026-114938-what-it-means-for-teamcity/)

### 📄 Virtualization, Responsible Disclosure, and CVE-2026-99312

The wall between you and your neighbor Every cloud customer gets the same promise: a bright-line boundary between your workload and your neighbors. Your virtual machine is yours, your neighbors’ are t

**📅 Nov 19, 2026** • **📰 DigitalOcean Blog**

[**🔗 Read more**](https://www.digitalocean.com/blog/cve-2026-99312-kvm-patch)

### 📄 Why the Harness Matters: Early Lessons From the Evo Code Scanning Agent Preview

In early tests, Evo Code Scanning Agent’s security harness found more known vulnerabilities than Claude Security and Codex Security at the same compute budget, with lower precision. See what the resul

**📅 Nov 19, 2026** • **📰 Snyk Blog**

[**🔗 Read more**](https://snyk.io/blog/why-harness-matters-evo-code-scanning-agent/)

### 📄 Turn Slack conversations into trusted software, faster

Most software starts as a conversation: a customer requests a new capability, a product manager weighs it against the roadmap, an engineer checks feasibility, and a security lead asks what it touches.

**📅 Nov 19, 2026** • **📰 GitLab Blog**

[**🔗 Read more**](https://about.gitlab.com/blog/gitlab-slack-integration-for-software-factory/)

### 📄 Automating bare metal infrastructure in FIPS-regulated environments with MAAS

Organizations operating sensitive infrastructure, particularly in the government, defense, and financial services sectors, often face strict security and compliance requirements. These requirements ex

**📅 Nov 18, 2026** • **📰 Ubuntu Blog**

[**🔗 Read more**](https://ubuntu.com//blog/automating-bare-metal-infrastructure-in-fips-regulated-environments-with-maas)

### 📄 Red Hat OpenShift 5 is now available on Azure Red Hat OpenShift

Red Hat OpenShift 5 is here and it's generally available on Microsoft Azure Red Hat OpenShift with hosted control planes. Whether you're already running Red Hat OpenShift, migrating workloads to Azure

**📅 Nov 18, 2026** • **📰 OpenShift Blog**

[**🔗 Read more**](https://www.redhat.com/en/blog/red-hat-openshift-5-now-available-azure-red-hat-openshift)

---

## 💾 Databases

### 📄 PLEASE_READ_ME: The Opportunistic Ransomware Devastating MySQL Servers

Guardicore Labs uncovers a Ransomware detection campaign targeting MySQL servers. Attackers use Double Extortion and publish data to pressure victims.

**📅 Nov 23, 2026** • **📰 Linode Blog**

[**🔗 Read more**](https://www.akamai.com/blog/security/please-read-me-opportunistic-ransomware-devastating-mysql-servers)

### 📄 MCP Server Persistence Explained: How to Store Sessions and Agent State

Key Takeaways MCP server persistence is the practice of storing session continuity, tool outputs, event history, and agent state outside process memory, so an MCP server keeps working through reconnec

**📅 Nov 23, 2026** • **📰 TiDB Blog**

[**🔗 Read more**](https://www.pingcap.com/blog/mcp-server-persistence/)

### 📄 When to Move from Single-Node Systems to Distributed Systems

This excerpt from Designing Data-Intensive Applications 2E examines the benefits and trade-offs of distributed systems compared to using a single machine

**📅 Nov 23, 2026** • **📰 ScyllaDB Blog**

[**🔗 Read more**](https://www.scylladb.com/2026/11/23/when-to-move-distributed-systems-ddia/)

### 📄 Data + AI Anywhere: AlloyDB Omni integration with local models

Open models like Gemma 4 from Google DeepMind are a great option to keep your data local. But how can a local AI model integrate with on-premises data? AlloyDB Omni, Google’s 100% PostgreSQL-compatibl

**📅 Nov 23, 2026** • **📰 Google Cloud Blog**

[**🔗 Read more**](https://cloud.google.com/blog/products/databases/alloydb-omni-integration-with-local-models/)

### 📄 How a Sales Career at MongoDB Will Set You Apart

A sales career at MongoDB means owning the entire sales cycle, from pipeline generation to close, in a team-based culture where peers share what works, and career advancement follows results. MongoDB 

**📅 Nov 23, 2026** • **📰 MongoDB Blog**

[**🔗 Read more**](https://www.mongodb.com/company/blog/culture/how-sales-career-at-mongodb-will-set-you-apart)

### 📄 Kiro Writes the Spec, and Meko Remembers Why

Discover how Kiro’s spec-driven development and Meko’s architectural memory complement each other. While Kiro helps AI agents write code through structured specifications, Meko preserves the rationale

**📅 Nov 23, 2026** • **📰 Yugabyte Blog**

[**🔗 Read more**](https://www.yugabyte.com/blog/kiro-writes-the-spec-and-meko-remembers-why/)

### 📄 Automating encryption at rest with Canonical’s Charmed MongoDB

Learn how to enable encryption at rest on MongoDB with Canonical’s Charmed MongoDB

**📅 Nov 23, 2026** • **📰 Ubuntu Blog**

[**🔗 Read more**](https://ubuntu.com//blog/encryption-at-rest-with-charmed-mongodb)

### 📄 PGConf.dev 2027 Call for Proposals is Open

PGConf.dev 2027 (May 11-14, 2027, Montréal, CA), aka PostgreSQL Developer Conference 2027, is the annual gathering of PostgreSQL community organizers, hackers, extension maintainers, and the developer

**📅 Nov 23, 2026** • **📰 PostgreSQL News**

[**🔗 Read more**](https://www.postgresql.org/about/news/pgconfdev-2027-call-for-proposals-is-open-3451/)

### 📄 How I made Muse less forgetful

My new car was delivered on a Monday in late October. A few days later I asked my agent (Muse) a simple question about it, and it confidently told me about the other car, the one I had sold to make ro

**📅 Nov 23, 2026** • **📰 Redis Blog**

[**🔗 Read more**](https://redis.io/blog/how-i-made-muse-less-forgetful/)

### 📄 Nordic PGDay 2027 - Call for Papers & Sponsors!

We are pleased to announce that the Call for Papers for Nordic PGDay 2027 is now open. The conference will take place in Stockholm, Sweden on March 16, continuing the tradition of bringing together Po

**📅 Nov 22, 2026** • **📰 PostgreSQL News**

[**🔗 Read more**](https://www.postgresql.org/about/news/nordic-pgday-2027-call-for-papers-sponsors-3450/)

### 📄 Benchmarking v5 Droplets: what the numbers say across real workloads

We ran v5 (5th Gen AMD EPYC “Turin”) compared to our existing Dedicated Premium Droplets across a range of workloads: a realistic microservices application, raw CPU, memory, and database transactions.

**📅 Nov 19, 2026** • **📰 DigitalOcean Blog**

[**🔗 Read more**](https://www.digitalocean.com/blog/v5-droplets-vs-dedicated-premium-benchmark)

### 📄 MongoDB is a Leader in The Forrester Wave™: Translytical Data Platforms

We’re pleased to announce that MongoDB has been recognized as a Leader in the recently released Forrester Wave™: Translytical Data Platforms, Q4 2024. The report—which highlights “Leaders, Strong Perf

**📅 Nov 19, 2026** • **📰 MongoDB Blog**

[**🔗 Read more**](https://www.mongodb.com/company/blog/news/mongodb-leader-in-forrester-wave-translytical-data-platforms)

---

## 🌐 Platforms

### 📄 The Oracle of Delphi Will Steal Your Credentials

Our deception technology is able to reroute attackers into honeypots, where they believe that they found their real target. The attacks brute forced passwords for RDP credentials to connect to the vic

**📅 Nov 23, 2026** • **📰 Linode Blog**

[**🔗 Read more**](https://www.akamai.com/blog/security/the-oracle-of-delphi-steal-your-credentials)

### 📄 The Nansh0u Campaign – Hackers Arsenal Grows Stronger

In the beginning of April, three attacks detected in the Guardicore Global Sensor Network (GGSN) caught our attention. All three had source IP addresses originating in South-Africa and hosted by Volum

**📅 Nov 23, 2026** • **📰 Linode Blog**

[**🔗 Read more**](https://www.akamai.com/blog/security/the-nansh0u-campaign-hackers-arsenal-grows-stronger)

### 📄 New guidance to optimize Git performance in Azure Repos

Git works well for most development workflows. But a change that seems harmless can make a repository harder to work with. Here are a few examples of how that can happen. Committing binaries directly 

**📅 Nov 23, 2026** • **📰 Azure DevOps Blog**

[**🔗 Read more**](https://devblogs.microsoft.com/devops/new-guidance-to-optimize-git-performance-in-azure-repos/)

### 📄 AWS launches 5 new open decision models for AI agents

AWS on Monday launched Strands Decider v2, a family of five open decision models. The release comes only seven weeks The post AWS launches 5 new open decision models for AI agents appeared first on Th

**📅 Nov 23, 2026** • **📰 The New Stack**

[**🔗 Read more**](https://thenewstack.io/aws-strands-decider-v2/)

### 📄 AWS Partner Central expands analytics access with Partner Central Agents and Data Subscriptions

AWS Partners and AWS Marketplace sellers now have two new ways to access their analytics data in AWS Partner Central. Partner Central Agents answer questions in plain language, and Data Subscriptions 

**📅 Nov 23, 2026** • **📰 CloudFormation Updates**

[**🔗 Read more**](https://aws.amazon.com/about-aws/whats-new/2026/11/partner-analytics-agent-s3/)

### 📄 AgentCore runtime instances are now generally available in the AWS GovCloud (US-West) Region

Amazon Bedrock AgentCore runtime instances are now available in the AWS GovCloud (US-West) Region. Runtime instances run your agents on Amazon EC2 instances in your own account, while AgentCore handle

**📅 Nov 23, 2026** • **📰 CloudFormation Updates**

[**🔗 Read more**](https://aws.amazon.com/about-aws/whats-new/2026/11/agentcore-runtime-instances-govcloud)

### 📄 How Sinch modernized its enterprise data warehouse from Snowflake to BigQuery to power AI

As the scale of global communications grows larger and larger, enterprise platforms must process billions of interactions with customers across a complex network of touchpoints without breaking them. 

**📅 Nov 23, 2026** • **📰 Google Cloud Blog**

[**🔗 Read more**](https://cloud.google.com/blog/products/data-analytics/how-sinch-migrated-from-snowflake-to-bigquery-to-power-ai/)

### 📄 1,615 New TLDs Are Coming. Is Your DNS Ready for a Bigger Namespace?

ICANN’s 2026 round revealed 1,615 new TLDs. Learn how to stop TLD-swap look-alikes, name collisions, and DNS risks before delegation begins.

**📅 Nov 23, 2026** • **📰 Linode Blog**

[**🔗 Read more**](https://www.akamai.com/blog/security/2026/nov/1615-new-tlds-dns-ready-for-bigger-namespace)

### 📄 Probing DNS at Cloudflare

At Cloudflare we’ve built tools to enable teams to extend our internal testing framework and build test tooling for networking protocols. This is the story of how this was used for DNS.

**📅 Nov 23, 2026** • **📰 Cloudflare Blog**

[**🔗 Read more**](https://blog.cloudflare.com/probing-dns-at-cloudflare/)

### 📄 Holding the Door for Agents

The agents, man. They’re everywhere. At least 55% of deployments to Fly.io are now performed by agents. Bots passed humans in web traffic for the first time this year, mostly driven by the surge in ag

**📅 Nov 23, 2026** • **📰 Fly.io Blog**

[**🔗 Read more**](https://fly.io/blog/holding-the-door-for-agents/)

### 📄 How Cloudflare WAF helps protect against phpAfterShell and other critical PHP flaws

phpAfterShell is a critical flaw in PHP's default session handler that can lead to code execution. Cloudflare WAF blocks it for all customers, including Free plans, and adds new rules for other PHP fl

**📅 Nov 20, 2026** • **📰 Cloudflare Blog**

[**🔗 Read more**](https://blog.cloudflare.com/phpaftershell-waf-protection/)

### 📄 Copilot Code Reviews for Azure Repos is generally available

Copilot Code Review for Azure Repos is now generally available. Use GitHub Copilot to review pull requests, identify issues, and suggest code changes. The post Copilot Code Reviews for Azure Repos is 

**📅 Nov 20, 2026** • **📰 Azure DevOps Blog**

[**🔗 Read more**](https://devblogs.microsoft.com/devops/copilot-code-reviews-for-azure-repos-is-generally-available/)

---

## 📰 Misc

### 📄 Visual Studio Code 1.148 (Insiders)

Learn what is new in the latest Visual Studio Code Insiders build, including agent session management and editor tab improvements. Read the full article

**📅 Nov 25, 2026** • **📰 VS Code Blog**

[**🔗 Read more**](https://code.visualstudio.com/updates/v1_148)

### 📄 Anthropic’s Claude Ship lets Claude approve routine pull requests

Anthropic on Monday launched Claude Ship, a set of three agents that can review pull requests (PRs), fix them, and approve The post Anthropic’s Claude Ship lets Claude approve routine pull requests ap

**📅 Nov 23, 2026** • **📰 The New Stack**

[**🔗 Read more**](https://thenewstack.io/anthropic-claude-ship-approvals/)

### 📄 Google’s AI agents cut quantum computing costs 290-fold — now you can check their work

Google DeepMind has open-sourced the Lean 4 framework used to verify quantum algorithms developed by its Gemini 4 agents, including The post Google’s AI agents cut quantum computing costs 290-fold — n

**📅 Nov 23, 2026** • **📰 The New Stack**

[**🔗 Read more**](https://thenewstack.io/deepmind-lean-quantum-verification/)

### 📄 Z.ai ran the same 28 layers twice — and claims its 750B model can rival a 3-trillion-parameter one

Z.ai released GLM-5.4 on Monday, introducing a Loop Transformer architecture that executes the same layers multiple times to increase computational The post Z.ai ran the same 28 layers twice — and cla

**📅 Nov 23, 2026** • **📰 The New Stack**

[**🔗 Read more**](https://thenewstack.io/zai-glm54-loop-transformer/)

### 📄 Kotlin Benchmark 2.0: How AI Coding Agents Handle Harder Tasks and Closed-Source Code

In July, we released the Kotlin Benchmark – a collection of 105 real repository-level tasks for evaluating AI coding agents’ work with Kotlin. Since then, we’ve updated it to be more representative of

**📅 Nov 23, 2026** • **📰 JetBrains Blog**

[**🔗 Read more**](https://blog.jetbrains.com/kotlin/2026/11/kotlin-benchmark-2-0-how-ai-coding-agents-handle-harder-tasks-and-closed-source-code/)

### 📄 Creating Polars Expression Plugins in PyCharm: A Step-by-Step Guide for Rust Beginners

Polars is a favorite among data scientists. It’s a high-performance, columnar DataFrame library written in Rust and powered by Apache Arrow. Unlike traditional single-threaded tools, Polars uses full 

**📅 Nov 23, 2026** • **📰 JetBrains Blog**

[**🔗 Read more**](https://blog.jetbrains.com/pycharm/2026/11/creating-polars-expression-plugins-in-pycharm-a-step-by-step-guide-for-rust-beginners/)

### 📄 Why physical AI depends on an open source foundation

From autonomous mobile robots and industrial equipment to drones, intelligent vehicles, and edge devices, AI is increasingly being embedded into machines that perceive, reason, and act in the physical

**📅 Nov 23, 2026** • **📰 Red Hat Blog**

[**🔗 Read more**](https://www.redhat.com/en/blog/why-physical-ai-depends-open-source-foundation)

### 📄 15 years of long term support for bare metal automation with MAAS

Building modern AI supercomputing clusters, deploying 5G telecommunications networks, or operating High Performance Computing (HPC) data centers requires significant capital investment (CapEx). These 

**📅 Nov 22, 2026** • **📰 Ubuntu Blog**

[**🔗 Read more**](https://ubuntu.com//blog/15-years-of-long-term-support-for-bare-metal-automation-with-maas)

### 📄 What’s it like to work at Canonical?

Working in technology is exciting. You meet constant challenges and get the satisfaction of working on products that can scale to reach millions. There are many technology companies where you could st

**📅 Nov 19, 2026** • **📰 Canonical Blog**

[**🔗 Read more**](https://canonical.com//blog/working-at-canonical)

### 📄 Visual Studio Code 1.147

Learn what's new in Visual Studio Code 1.147 Read the full article

**📅 Nov 18, 2026** • **📰 VS Code Blog**

[**🔗 Read more**](https://code.visualstudio.com/updates/v1_147)

### 📄 From documentation to design thinking: lessons from Canonical’s Design Academy

Technical Authors at Canonical design experiences: they organize complex information, guide users through unfamiliar systems, and translate technical detail into something people can act on. What chan

**📅 Nov 18, 2026** • **📰 Canonical Blog**

[**🔗 Read more**](https://canonical.com//blog/from-documentation-to-design-thinking-lessons-from-canonicals-design-academy)

### 📄 The Copilot harness: Building on a shared foundation

Learn why VS Code is moving from the Local harness to the Copilot harness, guided by data and user feedback. Read the full article

**📅 Nov 18, 2026** • **📰 VS Code Blog**

[**🔗 Read more**](https://code.visualstudio.com/blogs/2026/11/18/copilot-harness)
