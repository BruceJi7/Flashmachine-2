import style from "./About.module.scss";

function About() {
  return (
    <div className={style.main}>
      <div className={style.title}>About</div>
      <details className={style.detailBox}>
        <summary>What does it do?</summary>
        <p>Flashmachine is a wordlist app for Korean and English learners.</p>
        <p>It produces Anki-compatible flashcard content.</p>
        <p>
          Fill in words as you are reading, and when you are done, submit the
          words to see the definitions.
        </p>
        <p>
          You may then edit the resulting definitions into memorable flashcard
          content. Press 'Make cards' to receive a .txt file you can import into
          your Anki deck!
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>What is Anki?</summary>
        <p>
          <a href="https://apps.ankiweb.net/" target="_blank" rel="noreferrer">
            Anki
          </a>{" "}
          is a spaced-repetition learning tool - a flashcard app - that is great
          for learning languages. You can use it on PC or Android for free, and
          iOS for a price. I've been using it daily since 2014.
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>Why only 30 words?</summary>
        <p>
          The words are sourced from a third-party and in order not to swamp
          their servers with requests, I limited the word list to 30.
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>Only Korean/English?</summary>
        <p>
          The dictionary I'm using doesn't really support other languages that
          well. Plus using another dictionary would mean basically building a
          whole 'nother app. It's not on the cards right now.
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>Can I use this on my phone?</summary>
        <p>
          Yeeees, I made it with phones in mind, but certainly with iPhones the
          resulting .txt file can look a bit strange when opened. Also, you need
          to use the PC to import the cards into Anki!
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>What does signing up do?</summary>
        <p>
          Since downloading the list on your phone isn't that useful, try
          signing up!
        </p>
        <p>
          On the user page, you can save the current word list, and load the
          previous one.
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>How do I import the cards?</summary>
        <p>
          Importing from .txt is possible on a computer version of the app, not
          a phone version.
        </p>
        <p>
          Open the app on your computer, select the deck you want to import to,
          and choose File --&gt; import.
        </p>
        <p>
          In the next dialog box, make sure the option 'text separated by tabs
          or semicolons' is chosen.
        </p>
        <p>
          You'll see another dialog box that will help you to get the right
          fields from your flashmachine file into your anki deck.
        </p>
        <p>
          That's the most complicated part, take your time because it's awkward
          to undo. Go for it!
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>Tips for using Flashmachine</summary>
        <p>If you're on the computer, you can add words using the enter key.</p>
        <p>
          You can delete the last word with <kbd>ctrl</kbd> +{" "}
          <kbd>backspace</kbd>.
        </p>
        <p>
          You can also submit your word list with <kbd>ctrl</kbd> +{" "}
          <kbd>enter</kbd>!
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>Some meanings look weird</summary>
        <p>The meanings go through a few processes before they reach you.</p>
        <p>
          However, despite my best intentions, even though it's programmed to
          ignore meanings that don't have any actual letters in them, some still
          slip past. I'm constantly working to refine this process :)
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>The meaning is the wrong language!</summary>
        <p>
          It's possible if you search for an unusual Korean word, that the
          result is Korean :| It entirely depends on what the dictionary has for
          the word, unfortunately.
        </p>
      </details>
      <details className={style.detailBox}>
        <summary>About the dev</summary>
        <p>I'm Tobias. I'm from the UK, but I live in Korea.</p>
        <p>I used to be an English teacher here but now I'm a web developer</p>
        <p>
          Anki helped me out a lot learning Korean, so this is something to help
          Anki out (and all you other Korean or English learners!)
        </p>
      </details>
    </div>
  );
}

export default About;
