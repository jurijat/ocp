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
      id: "foundations",
      title: "FOUNDATIONS",
      timeRange: "09:15 — 10:40",
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
          time: "09:15",
          category: "FOUNDATIONS",
          title: "WHAT'S NEW IN OPENAPI 3.2",
          speakers: [
            {
              name: "LORNA MITCHELL",
              company: "TM FORUM",
              avatar: asset("/images/speakers/Lorna.jpg"),
            },
          ],
        },
        {
          id: "2",
          time: "09:45",
          category: "FOUNDATIONS",
          title: "YOU MAY HAVE OPENAPI, BUT IS IT AI-READY?",
          speakers: [
            {
              name: "FRANK KILCOMMINS",
              company: "JENTIC",
              avatar: asset("/images/speakers/Frank.jpg"),
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
              name: "SIMON HARRER",
              company: "ENTROPY DATA",
              avatar: asset("/images/speakers/Simon.jpg"),
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
              company: "OSAANGO",
              avatar: asset("/images/speakers/Marjukka.jpg"),
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
              company: "SPECMATIC",
              avatar: asset("/images/speakers/Naresh.jpg"),
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
              name: "BADR NASS LAHSEN",
              company: "CYBERARK",
              avatar: asset("/images/speakers/Badr.jpg"),
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
          title: "TBD",
          speakers: [],
        },
        {
          id: "9",
          time: "14:30",
          category: "APPLICATIONS",
          title: "WHY CLOUD NATIVE APIS ARE THE ENGINE OF AI-DRIVEN INNOVATION",
          speakers: [
            {
              name: "DAN CIRULI",
              company: "NUTANIX",
              avatar: asset("/images/speakers/Dan.jpg"),
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
              company: "CITI",
              avatar: asset("/images/speakers/Rahul.jpg"),
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
          title: "TBD",
          speakers: [],
        },
        {
          id: "12",
          time: "16:25",
          category: "THE LOOKING GLASS",
          title: "IS OPENAPI STILL RELEVANT IN THE AGE OF AI?",
          speakers: [
            {
              name: "EMMANUEL PARASKAKIS",
              company: "LEVEL 250",
              avatar: asset("/images/speakers/Emmanuel.jpg"),
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
    <HeaderSection title="AGENDA" href="#agenda" />
    <div id="agenda">
      <AgendaList sections={sections2} />
    </div>
    <HeaderSection title="PREVIOUS EVENTS" href="#previous-events" />
    <div id="previous-events">
      <PreviousEventsGallery />
    </div>

    <DualHeaderSection
      title="Subscribe"
      subtitle="for OPENAPI Conf updates"
      iconType="plus"
      href="https://www.openapis.org/"
    />
    <Footer />
  </div>
</div>
