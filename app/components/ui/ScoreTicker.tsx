const tickerPhrases = [
  "Cool Guy",
  "Makes People Laugh",
  "Software Engineer",
  "Detroit Sports",
  '"I love him" - My Wife',
  "Mental Health Advocate",
  "Handsome?",
  "Enterprise Architect",
]

export default function ScoreTicker() {
  const items = [...tickerPhrases, ...tickerPhrases]

  return (
    <div className="score-ticker" aria-hidden="true">
      <div className="score-ticker-track">
        {items.map((phrase, index) => (
          <span key={`${phrase}-${index}`} className="score-ticker-item">
            {phrase}
          </span>
        ))}
      </div>
    </div>
  )
}
