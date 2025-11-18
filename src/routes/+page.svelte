<script lang="ts">
  import { asset } from "$app/paths";
  import AgendaList from "$lib/components/Agenda/AgendaList.svelte";
  import DualHeaderSection from "$lib/components/HeaderHero/DualHeaderSection.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import PreviousEventsGallery from "$lib/components/Events/PreviousEventsGallery.svelte";
  import HeaderHero from "$lib/components/HeaderHero/HeaderHero.svelte";
  import HeaderSection from "$lib/components/HeaderHero/HeaderSection.svelte";

  const sections2 = [
    {
      id: "opening-keynote",
      title: "OPENING AND KEYNOTE",
      timeRange: "09:30 — 10:25",
      items: [
        {
          id: "breakfast",
          time: "09:30",
          category: "",
          title: "EXECUTIVE BREAKFAST",
          badge: "INVITE ONLY",
          speakers: [],
          icon: asset("/images/break-fest.svg"),
        },
        {
          id: "1",
          time: "10:00",
          category: "OPENING",
          title: "OAI TRACK INTRODUCTION AND THE STATE OF OPENAPI",
          speakers: [
            {
              name: "ERIK WILDE",
              company: "INNOQ",
            },
          ],
        },
        {
          id: "2",
          time: "10:25",
          category: "KEYNOTE",
          title: "DELIVERING AUTHENTIC INTELLIGENCE WITH OPENAPI",
          speakers: [
            {
              name: "DARRELL MILLER",
              company: "JOB MICROSOFT, OAI TECHNICAL STEERING COMMITTEE",
            },
          ],
        },
      ],
    },
    {
      id: "governance",
      title: "GOVERNANCE",
      timeRange: "11:10 — 12:25",
      items: [
        {
          id: "3",
          time: "11:10",
          category: "GOVERNANCE",
          title: "WALK THE OPENAPI TALK, MOONWALK THE DEVELOPER EXPERIENCE!",
          speakers: [
            {
              name: "OLEG NENASHEV",
              company: "COMMUNITY BUILDER AND DEVELOPER ADVOCATE, GRADLE",
            },
          ],
        },
        {
          id: "4",
          time: "11:35",
          category: "GOVERNANCE",
          title:
            "PROJECT API FORGE: STREAMLINING DEV-FIRST API LIFECYCLE MANAGEMENT",
          speakers: [
            {
              name: "NARESH JAIN",
              company: "",
            },
          ],
        },
        {
          id: "5",
          time: "12:00",
          category: "GOVERNANCE",
          title:
            "USING XREGISTRY TO CENTRALIZE ENTITY SCHEMAS FOR INTEGRATION PRODUCTS",
          speakers: [
            {
              name: "RAFAEL GRANADOS",
              company: "HDI GLOBAL SE",
            },
          ],
        },
        {
          id: "6",
          time: "12:25",
          category: "GOVERNANCE",
          title:
            "API SCORING – THE SECRET WEAPON IN THE BATTLE FOR API EXCELLENCE",
          speakers: [
            {
              name: "RAFAEL GRANADOS",
              company: "RAFAEL GRANADOS",
            },
          ],
        },
      ],
    },
    {
      id: "design",
      title: "DESIGN",
      timeRange: "13:50 — 15:05",
      items: [
        {
          id: "7",
          time: "13:50",
          category: "DESIGN",
          title:
            "GENERATE OPENAPI SCHEMA FROM GOLANG CODE WITH THE FUEGO FRAMEWORK",
          speakers: [
            {
              name: "EWEN QUIMERC'H",
              company: "",
            },
            {
              name: "EDOUARD LACOURT",
              company: "",
            },
          ],
        },
        {
          id: "8",
          time: "14:15",
          category: "DESIGN",
          title: "INCLUSIVE APIS: HOW TO EXTEND OPENAPI FOR ACCESSIBILITY",
          speakers: [
            {
              name: "JOE TUCCI",
              company: "CHAIRMAN, PRESIDENT AND CEO, EMC",
            },
          ],
        },
        {
          id: "9",
          time: "14:40",
          category: "DESIGN",
          title: "WHAT'S UP DOC? THE DOCTOR A NEW TOOL PLAYER FOR OPEN API",
          speakers: [
            {
              name: "FRANCOIS LASNE",
              company: "",
            },
          ],
        },
        {
          id: "10",
          time: "15:05",
          category: "DESIGN",
          title: "TACKLING OPENAPI DRIFT",
          speakers: [
            {
              name: "FRANCOIS LASNE",
              company: "",
            },
          ],
        },
      ],
    },
    {
      id: "tooling",
      title: "TOOLING",
      timeRange: "15:55 — 17:35",
      items: [
        {
          id: "11",
          time: "15:55",
          category: "TOOLING",
          title:
            "AN ALTERNATIVE VIEW ON OPENAPI DOCS. START FINALLY DOING IT RIGHT!",
          speakers: [
            {
              name: "FRANCOIS LASNE",
              company: "",
            },
          ],
        },
        {
          id: "12",
          time: "16:20",
          category: "TOOLING",
          title: "7 RULES FOR CRAFTING DEVELOPER FRIENDLY API LIBRARIES",
          speakers: [
            {
              name: "IKENNA NWAIWU",
              company: "AUTHOR OF AUTOMATING API DELIVERY",
            },
          ],
        },
        {
          id: "13",
          time: "16:45",
          category: "TOOLING",
          title: "DESCRIBING API WORKFLOWS WITH ARAZZO",
          speakers: [
            {
              name: "FRANK KILCOMMINS",
              company: "PRINCIPAL API TECHNICAL EVANGELIST, SMARTBEAR",
            },
          ],
        },
        {
          id: "14",
          time: "17:10",
          category: "TOOLING",
          title: "ORCHESTRATING APIS USING AWS STEP FUNCTIONS",
          speakers: [
            {
              name: "DANIEL GUTIERREZ DIEZ",
              company: "PRINCIPAL SOFTWARE ENGINEER, FACTSET",
            },
          ],
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>OpenAPI Conference - Paris 2025</title>
  <meta
    name="description"
    content="Join us at the OpenAPI Conference in Paris. Exclusive masterclasses by API masters on December 11th."
  />
</svelte:head>

<div class="flex items-center justify-center min-h-screen w-full mx-auto">
  <div class="max-w-[2440px] w-full">
    <HeaderHero />
    <DualHeaderSection
      title="Want to learn more?"
      subtitle="Checkout Masterclasses by API Master on December 10th"
      imageUrl={asset("/images/api_masters.svg")}
      imageAlt="API Master Logo"
    />
    <HeaderSection title="AGENDA" />
    <AgendaList sections={sections2} />
    <HeaderSection title="PREVIOUS EVENTS" />
    <PreviousEventsGallery />

    <DualHeaderSection
      title="Subscribe"
      subtitle="for OPENAPI Conf updates"
      iconType="plus"
    />
    <Footer />
  </div>
</div>
