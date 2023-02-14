> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Visitekaartje 2.0 met REST API

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
De visitekaarjte 2.0 is een meer dynamische visitekaartje met meer animaties en data uit een API.

<!-- Voeg een mooie poster visual toe 📸 -->
![image](https://user-images.githubusercontent.com/112855878/218800394-e5243d48-ea90-4f6e-9c3f-db3cb2ed885a.png)

<!-- Voeg een link toe naar Github Pages 🌐-->
live versie: https://blue-nervous-slug.cyclic.app/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De volgende technieken zijn gebruikt: HTML, CSS, JS, Node, EJS, Express en een API van FDND.

Belangrijke dingen in HTML:

Gebruik van de EJS template
```HTML
<h1><%= member.name %> <%= member.surname %></h1>
```

div containers gemaakt voor de circles
```HTML
<div class="circle-container"></div>
```

Belangrijke dingen in CSS:

absolute items voor de circles
```CSS
.circle-container, .circle-container2, .circle-container3, .circle-container4, .circle-container5{
  position: absolute;
  width: 20em;
  height: 20em;
  border-radius: 15em;
  background-color: var(--background-color-yellow);
  top: 15em;
  right: 30em;
}
```

keyframe animaite toegevoegd per circle
```CSS
.circle-container{
  animation: moveAroundCircle1 120s infinite linear;
  animation-delay: 0.3s;
}
```

Belangrijke dingen in JS:

## Installatie
Voordat je de applicatie kan runnen moet je node runnen op je lokale computer, Node kan je downloaden op de volgende website: https://nodejs.org/en/.
Download de stabiele versie 18.14.0 LTS, open je terminal binnen de code editior (zoals VS code) en run de volgende command lines:

- NPM install, dit om express, ejs en alle andere afhankelijkheden te downloaden.
- NPM start om je applicatie te runnen, je lokale server wordt meestal gerunned op port 8000.

## Gebruik
Binnen de visitekaartje kan je meer info vinden over mijn github naam, github page en mijn Linkedin! Dit zijn allemaal externe links.

## Bronnen
- Node download: https://nodejs.org/en/
- Express/node introductie: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction
- FDND API: https://whois.fdnd.nl/
- EJS: https://ejs.co/
- Using fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
