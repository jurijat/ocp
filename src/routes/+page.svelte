<script lang="ts">
  import { asset } from "$app/paths";
  import AgendaList from "$lib/components/Agenda/AgendaList.svelte";
  import DualHeaderSection from "$lib/components/HeaderHero/DualHeaderSection.svelte";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import PreviousEventsGallery from "$lib/components/Events/PreviousEventsGallery.svelte";
  import HeaderHero from "$lib/components/HeaderHero/HeaderHero.svelte";
  import HeaderSection from "$lib/components/HeaderHero/HeaderSection.svelte";

  const section = [
    {
      id: "foundations",
      title: "FOUNDATIONS",
      timeRange: "08:30 — 10:40",
      items: [
        {
          id: "breakfast",
          time: "08:30",
          category: "",
          title: "EXECUTIVE BREAKFAST",
          badge: "INVITE ONLY",
          speakers: [],
          icon: asset("/images/break-fest.svg"),
          disableHover: true,
        },
        {
          id: "1",
          time: "09:15",
          category: "FOUNDATIONS",
          title: "CONFERENCE WELCOME AND OPENAPI IN THE AGE OF AI",
          speakers: [
            {
              name: "ERIK WILDE",
              job: "HEAD OF ENTERPRISE STRATEGY",
              company: "JENTIC",
              avatar: asset("/images/speakers/Erik.jpg"),
              linkedin: "https://www.linkedin.com/in/erikwilde/",
            },
          ],
        },
        {
          id: "2",
          time: "09:45",
          category: "FOUNDATIONS",
          title: "WHAT'S NEW IN OPENAPI 3.2",
          speakers: [
            {
              name: "LORNA MITCHELL",
              job: "API ARCHITECT",
              company: "TM FORUM",
              avatar: asset("/images/speakers/Lorna.jpg"),
              linkedin: "https://www.linkedin.com/in/lornajane/",
            },
          ],
        },
        {
          id: "3",
          time: "10:15",
          category: "FOUNDATIONS",
          title: "DATA CONTRACTS: TREATING DATA AS APIS",
          speakers: [
            {
              name: "DR. SIMON HARRER",
              job: "CO-FOUNDER AND CEO",
              company: "ENTROPY DATA",
              avatar: asset("/images/speakers/Simon.jpg"),
              linkedin: "https://www.linkedin.com/in/simonharrer/",
            },
          ],
        },
      ],
    },
    {
      id: "practices",
      title: "PRACTICES",
      timeRange: "11:00 — 12:55",
      items: [
        {
          id: "4",
          time: "11:00",
          category: "PRACTICES",
          title:
            "FROM ZERO TO SPEC-HERO: ELIMINATING LEAN WASTES WHEN ADOPTING OPENAPI",
          speakers: [
            {
              name: "MARJUKKA NIINIOJA",
              job: "FOUNDING PARTNER",
              company: "OSAANGO",
              avatar: asset("/images/speakers/Marjukka.jpg"),
              linkedin: "https://www.linkedin.com/in/marjukkaniinioja/",
            },
          ],
        },
        {
          id: "5",
          time: "11:30",
          category: "PRACTICES",
          title:
            "HOW THE DUTCH GOVERNMENT USES AN OPENAPI-FIRST APPROACH TO LEVERAGE DEVELOPER EXPERIENCE",
          speakers: [
            {
              name: "DIMITRI VAN HEES",
              company: "GOVERNMENT OF THE NETHERLANDS",
              avatar: asset("/images/speakers/Dimitri.jpg"),
              linkedin: "https://www.linkedin.com/in/dimitrivanhees/",
            },
          ],
        },
        {
          id: "6",
          time: "12:00",
          category: "PRACTICES",
          title:
            "FROM REST TO EVENTS: API WORKFLOW TESTING AND MOCKING WITH A SINGLE ARAZZO SPEC",
          speakers: [
            {
              name: "NARESH JAIN",
              job: "FOUNDER, CEO",
              company: "SPECMATIC",
              avatar: asset("/images/speakers/Naresh.jpg"),
              linkedin: "https://www.linkedin.com/in/nareshjain/",
            },
          ],
        },
        {
          id: "7",
          time: "12:30",
          category: "PRACTICES",
          title: "OPENAPI AND SPRING-BOOT 4 - WHAT'S NEW?",
          speakers: [
            {
              name: "BADR NASSLAHSEN",
              job: "LEAD CLOUD AND SECURITY ARCHITECT",
              company: "CYBERARK",
              avatar: asset("/images/speakers/Badr.jpg"),
              linkedin: "https://www.linkedin.com/in/nasslahsen/",
            },
          ],
        },
      ],
    },
    {
      id: "applications",
      title: "APPLICATIONS",
      timeRange: "14:00 — 15:25",
      items: [
        {
          id: "8",
          time: "14:00",
          category: "APPLICATIONS",
          title: "WHAT'S ALL THE FUSS ABOUT TYPESPEC?",
          speakers: [
            {
              name: "CHRIS WOOD",
              job: "PRINCIPAL ARCHITECT",
              company: "OZONE API",
              avatar: asset("/images/speakers/Chris.jpg"),
              linkedin: "https://www.linkedin.com/in/sensiblewood/",
            },
          ],
        },
        {
          id: "9",
          time: "14:30",
          category: "APPLICATIONS",
          title: "WHY CLOUD NATIVE APIS ARE THE ENGINE OF AI-DRIVEN INNOVATION",
          speakers: [
            {
              name: "DAN CIRULI",
              job: "VICE PRESIDENT AND GENERAL MANAGER, CLOUD NATIVE",
              company: "NUTANIX",
              avatar: asset("/images/speakers/Dan.jpg"),
              linkedin: "https://www.linkedin.com/in/danciruli/",
            },
          ],
        },
        {
          id: "10",
          time: "15:00",
          category: "APPLICATIONS",
          title: "SPEC-FIRST API DESIGNS WITHOUT CODEGEN",
          speakers: [
            {
              name: "RAHUL DÉ",
              job: "VP, PLATFORM AND SITE RELIABILITY ENGINEERING, PUBLIC CLOUD",
              company: "CITI",
              avatar: asset("/images/speakers/Rahul.jpg"),
              linkedin: "https://www.linkedin.com/in/lispyclouds",
            },
          ],
        },
      ],
    },
    {
      id: "looking-glass",
      title: "THE LOOKING GLASS",
      timeRange: "15:55 — 16:50",
      items: [
        {
          id: "11",
          time: "15:55",
          category: "THE LOOKING GLASS",
          title: "YOU MAY HAVE OPENAPI, BUT IS IT AI-READY?",
          speakers: [
            {
              name: "FRANK KILCOMMINS",
              job: "HEAD OF ENTERPRISE ARCHITECTURE",
              company: "JENTIC",
              avatar: asset("/images/speakers/Frank.jpg"),
              linkedin: "https://www.linkedin.com/in/frank-kilcommins",
            },
          ],
        },
        {
          id: "12",
          time: "16:25",
          category: "THE LOOKING GLASS",
          title: "IS OPENAPI STILL RELEVANT IN THE AGE OF AI?",
          speakers: [
            {
              name: "EMMANUEL PARASKAKIS",
              job: "FOUNDER",
              company: "LEVEL250",
              avatar: asset("/images/speakers/Emmanuel.jpg"),
              linkedin: "https://www.linkedin.com/in/emmanuelparaskakis/",
            },
          ],
        },
      ],
    },
  ];
</script>

<div class="flex items-center justify-center min-h-screen w-full mx-auto">
  <div class="max-w-[2440px] w-full">
    <HeaderHero />
    <DualHeaderSection
      title="Want to learn more?"
      subtitle="Check out Masterclasses by API Masters on December 10th"
      imageUrl={asset("/images/api_masters.png")}
      imageAlt="API Masters Logo"
      href="https://apimasters.fr/our-masterclasses/entry/353/"
    />
    <HeaderSection title="AGENDA" />
    <div id="agenda">
      <AgendaList sections={section} />
    </div>
    <HeaderSection title="PREVIOUS EVENTS" />
    <div id="previous-events">
      <PreviousEventsGallery />
    </div>

    <DualHeaderSection
      title="Subscribe"
      subtitle="For OpenAPI Initiative Updates"
      iconType="plus"
      href="https://www.openapis.org/#footer-outer"
    />
    <Footer />
  </div>
</div>
