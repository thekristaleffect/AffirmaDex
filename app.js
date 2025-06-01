const affirmations = [
  {
    character: "Naruto Uzumaki",
    quote: "Believe it! You’re stronger than you think. Your inner ninja is unstoppable."
  },
  {
    character: "Sailor Moon",
    quote: "In the name of the moon, you’re destined to shine!"
  },
  {
    character: "Deku (Midoriya)",
    quote: "You don’t need a quirk to be powerful — your heart is enough."
  },
  {
    character: "Luffy",
    quote: "No dream is too big when you’ve got the guts to chase it!"
  },
  {
    character: "Hinata Hyuga",
    quote: "Quiet strength is still strength. Bloom on your terms."
  },
  {
    character: "Nezuko Kamado",
    quote: "You radiate kindness and power, even in silence."
  },
  {
    character: "Sasuke Uchiha",
    quote: "Channel your pain into purpose — that’s real power."
  },
  {
    character: "Goku",
    quote: "Push past your limits — there's no ceiling to your growth!"
  },
  {
    character: "Sakura Kinomoto",
    quote: "Each card you draw is a chance to grow. You’ve got this!"
  }
];

function showAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById("character").innerText = random.character;
  document.getElementById("quote").innerText = random.quote;
}
