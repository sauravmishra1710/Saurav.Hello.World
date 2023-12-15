import React from "react";
import { Col, Row } from "react-bootstrap";
import CardBook from "./cardBook";
import { Bounce } from "react-reveal";

import BookNerd from "../../img/page_logos/BookNerd.png";
import threeMistakes from "../../img/books/3Mistakes.jpg";
import fivePointSomeone from "../../img/books/5pointSomeOne.jpg";
import twoStates from "../../img/books/2States.jpg";
import OneNightAtTheCallCenter from "../../img/books/OneNightAtTheCallCenter.jpg";
import BombayRainsBombayGirls from "../../img/books/BombayRainsBombayGirls.jpg";
import SorcerersStone from "../../img/books/SorcerersStone.jpg";
import ChamberOfSecrets from "../../img/books/ChamberOfSecrets.jpg";
import HalfBloodPrince from "../../img/books/HalfBloodPrince.jpg";
import GobletOfFire from "../../img/books/GobletOfFire.jpg";
import PrisonerOfAzkaban from "../../img/books/PrisonerOfAzkaban.jpg";
import OrderOfPhoenix from "../../img/books/OrderOfPhoenix.jpg";
import EvolutionDecodingIndiasTechStory from "../../img/books/EvolutionDecodingIndiasTechStory.jpg";
import The5AMClub from "../../img/books/The5AMClub.jpg";
import India2030 from "../../img/books/India2030.jpg";
import BecauseIndiaComesFirst from "../../img/books/BecauseIndiaComesFirst.jpg";
import TheMonkWhoSoldHisFerrari from "../../img/books/TheMonkWhoSoldHisFerrari.jpg";
import Factfullness from "../../img/books/Factfullness.jpg";
import HotFlatCrowded from "../../img/books/HotFlatCrowded.jpg";
import ThinkingFastAndSlow from "../../img/books/ThinkingFastAndSlow.jpg";


function Bookstack() {
  return (
    <>
      <Row>
        <Col md={9}>
          <div className="col-lg-10" style={{ marginTop: "50px" }}>
            <h1 className="purple heading">Books</h1>

            <div className="publications-text">
              <p>
                Not a book nerd as the picture suggest's but I am more kind of a
                seasonal reader. But once I get into my reading mode, I want to
                finish it off in a sitting or two. Starting with the exchange of
                the{" "}
                <span className="purple">
                  <b>Enid Blyton's</b>
                </span>{" "}
                & the{" "}
                <span className="purple">
                  <b> Agatha Christie's </b>
                </span>
                while in high school to now reading books on{" "}
                <span className="purple">
                  <b> space-science & universe</b>
                </span>
                , to{" "}
                <span className="purple">
                  <b>impact of AI in healthacre</b>
                </span>
                , my reading journey has been a mix of multiple start & stop
                kind of phases.
              </p>
              <p>
                Starting with Enid Blyton's{" "}
                <a
                  href="https://www.goodreads.com/series/42018-the-famous-five"
                  target="_blank"
                  rel="noreferrer"
                >
                  The famous Five
                </a>{" "}
                &{" "}
                <a
                  href="https://www.goodreads.com/series/41242-the-secret-seven"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Secret Seven
                </a>{" "}
                to J. K. Rowling's portrayl of characters{" "}
                <span className="purple">
                  <b>Harry, Hermione, & Ron</b>
                </span>{" "}
                had been a major motivation back then to be glued to
                <a
                  href="https://www.goodreads.com/series/45175-harry-potter"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Harry Potter
                </a>{" "}
                series and getting me addicted to novels. It then transitioned
                me to the next phase of enjoying my engineering days reading
                about{" "}
                <span className="purple">
                  <b>
                    what not to do at <s>engineering colleges</s> IITs?
                  </b>
                </span>{" "}
                with Five Point Someone, and{" "}
                <span className="purple">
                  <b>trying to figure out which 3 mistakes to not repeat</b>
                </span>{" "}
                with the 3 Mistakes of My Life from Chetan Bhagat's leafs. And
                more recently, my curious neurons have made me reading about{" "}
                <span className="purple">
                  <b>
                    The Big Bang and the events that followed leading to the
                    creation of our Universe
                  </b>
                </span>{" "}
                which with it's continuous state of infinite expansion opens us
                to a source of infinite knowledge.
              </p>
              <p></p>
              <p>
                The list below gives a glimplse of my part and parcel reading
                activities...
              </p>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <Bounce top>
            <div style={{ marginTop: "60px", marginRight: "50px" }}>
              <img src={BookNerd} alt="" height={400} width={400} />
            </div>
          </Bounce>
        </Col>
      </Row>
      <Row>
        <div className="books-parent" id="booksSection">
          <h2 className="purple heading">Books I have read...</h2>
          <div className="all-books-container">
          <div className="books-card">
              <CardBook
                book_cover={ThinkingFastAndSlow}
                good_read_link="https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"
                tooltip_blurb_text="In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and more logical. Kahneman exposes the extraordinary capabilities—and also the faults and biases—of fast thinking, and reveals the pervasive influence of intuitive impressions on our thoughts and behavior. The impact of loss aversion and overconfidence on corporate strategies, the difficulties of predicting what will make us happy in the future, the challenges of properly framing risks at work and at home, the profound effect of cognitive biases on everything from playing the stock market to planning the next vacation—each of these can be understood only by knowing how the two systems work together to shape our judgments and decisions.
                Engaging the reader in a lively conversation about how we think, Kahneman reveals where we can and cannot trust our intuitions and how we can tap into the benefits of slow thinking. He offers practical and enlightening insights into how choices are made in both our business and our personal lives—and how we can use different techniques to guard against the mental glitches that often get us into trouble. Thinking, Fast and Slow will transform the way you think about thinking."
                animationType="bottom"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={HotFlatCrowded}
                good_read_link="https://www.goodreads.com/book/show/2358737.Hot_Flat_and_Crowded"
                tooltip_blurb_text="In this brilliant, essential book, Pulitzer Prize-winning author Thomas L. Friedman speaks to America's urgent need for national renewal and explains how a green revolution can bring about both a sustainable environment and a sustainable America.
                Friedman explains how global warming, rapidly growing populations, and the expansion of the world’s middle class through globalization have produced a dangerously unstable planet--one that is 'hot, flat, and crowded.'  In this Release 2.0 edition, he also shows how the very habits that led us to ravage the natural world led to the meltdown of the financial markets and the Great Recession.  The challenge of a sustainable way of life presents the United States with an opportunity not only to rebuild its economy, but to lead the world in radically innovating toward cleaner energy.  And it could inspire Americans to something we haven't seen in a long time--nation-building in America--by summoning the intelligence, creativity, and concern for the common good that are our greatest national resources.
                Hot, Flat, and Crowded is classic Thomas L. Friedman: fearless, incisive, forward-looking, and rich in surprising common sense about the challenge--and the promise--of the future."
                animationType="top"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={Factfullness}
                good_read_link="https://www.goodreads.com/book/show/34890015-factfulness"
                tooltip_blurb_text="When asked simple questions about global trends—what percentage of the world’s population live in poverty; why the world’s population is increasing; how many girls finish school—we systematically get the answers wrong. So wrong that a chimpanzee choosing answers at random will consistently outguess teachers, journalists, Nobel laureates, and investment bankers.
                In Factfulness, Professor of International Health and global TED phenomenon Hans Rosling, together with his two long-time collaborators, Anna and Ola, offers a radical new explanation of why this happens. They reveal the ten instincts that distort our perspective—from our tendency to divide the world into two camps (usually some version of us and them) to the way we consume media (where fear rules) to how we perceive progress (believing that most things are getting worse).
                Our problem is that we don’t know what we don’t know, and even our guesses are informed by unconscious and predictable biases.
                It turns out that the world, for all its imperfections, is in a much better state than we might think. That doesn’t mean there aren’t real concerns. But when we worry about everything all the time instead of embracing a worldview based on facts, we can lose our ability to focus on the things that threaten us most.
                Inspiring and revelatory, filled with lively anecdotes and moving stories, Factfulness is an urgent and essential book that will change the way you see the world and empower you to respond to the crises and opportunities of the future."
                animationType="bottom"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={EvolutionDecodingIndiasTechStory}
                good_read_link="https://www.goodreads.com/book/show/43427898-evolution"
                tooltip_blurb_text="Will robots rule? Will commuting to the moon for work be routine? Are bionic beings and immortality inevitable? Evolution addresses these issues as it traces the recent evolution of technology and its impact on daily life, on society and on countries. It looks at how rapidly-advancing technology has affected day-to-day living in areas like health, education, finance and governance. It also elaborates the emerging challenges triggered by technology: cyber security, surveillance, climate change and nuclear war. Using his wisdom, knowledge and experience in areas ranging from space and atomic energy to information technology, Kiran Karnik generates discussion, spurs dissenting views and triggers further analysis—all originating from different perspectives, thereby helping the country to not only cope with the emerging future, but also to try shape it to the benefit of all. Rich in its detail and insight, Evolution will take you from nostalgia to an imagined future, narrated through personal anecdotes and experiences."
                animationType="top"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={BecauseIndiaComesFirst}
                good_read_link="https://www.goodreads.com/book/show/55835542-because-india-comes-first"
                tooltip_blurb_text="For the last few decades, Ram Madhav—formerly the national general secretary of the Bharatiya Janata Party—has been observing and participating in Indian politics. Drawing from his years of involvement in politics, Madhav’s essays discuss a range of issues that are at the heart of contemporary debates in India: democracy as the responsibility of the head of state, rule of law, peace and public order, Mahatma Gandhi and Gandhi-ism, Ambedkar’s ideals, empowerment of women, Indian judiciary, the Ram Janmabhoomi case, abrogation of Article 370, the legacies of Atal Bihari Vajpayee and Arun Jaitley, and Prime Minister Narendra Modi’s learnings in governance. Because India Comes First also delves into the decisions made by the BJP-led government over the last few years, diplomatic relationships with India’s neighbours and the confrontations with China. Madhav enquires into Indian policymaking and asserts that, going ahead, it must put India first. He calls out liberal fascism, deconstructs our understanding of terrorism in India, argues that opposition to the Citizenship (Amendment) Act is intellectually dishonest, explores how learnings from Black Lives Matter can be applied in the Indian sphere and explains why protests should be rooted in Martin Luther King Jr.’s non-violent approach and not anarchy. The essays in this volume weave a broad tapestry of India’s growth into a soft power, and predicts how it will shape up over the next few decades. A must read for those who believe in the new idea of India, and for those who accept that there are two sides to every debate."
                animationType="bottom"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={India2030}
                good_read_link="https://www.goodreads.com/book/show/56222295-india-2030"
                tooltip_blurb_text="Thought leaders from twenty diverse fields, ranging from education to healthcare, science, energy, politics and foreign policy, speak of their predictions for India in 2030 and look at how the nation will evolve this decade. Editor Gautam Chikermane weaves together essays by Bibek Debroy, Vikram Sood, Monica Halan, R.A. Mashelkar, Ram Madhav, David Frawley, Rajesh Parikh, Justice B.N. Srikirshna, Abhijit Iyer Mitra, Samir Saran, Amrita Narlikar, Kirit Parikh, Manish Sabherwal, Parth Shah, Ajay Shah, Reuben Abraham, Amish Tripathi, Sandipan Deb and Devdip Ganguli into one masterful volume. This is an essential read for anyone interested to learn about India as it is today and the goals it should be aspiring to attain by 2030."
                animationType="top"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={TheMonkWhoSoldHisFerrari}
                good_read_link="https://www.goodreads.com/book/show/43877.The_Monk_Who_Sold_His_Ferrari"
                tooltip_blurb_text="This inspiring tale provides a step-by-step approach to living with greater courage, balance, abundance, and joy. A wonderfully crafted fable, The Monk Who Sold His Ferrari tells the extraordinary story of Julian Mantle, a lawyer forced to confront the spiritual crisis of his out-of-balance life. On a life-changing odyssey to an ancient culture, he discovers powerful, wise, and practical lessons that teach us to: Develop Joyful Thoughts, Follow Our Life's Mission and Calling, Cultivate Self-Discipline and Act Courageously, Value Time as Our Most Important Commodity, Nourish Our Relationships, and Live Fully, One Day at a Time."
                animationType="bottom"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={The5AMClub}
                good_read_link="https://www.goodreads.com/book/show/53424992-the-5am-club"
                tooltip_blurb_text="Part manifesto for mastery, part playbook for genius-grade productivity and part companion for a life lived beautifully, the 5 am club is a work that will transform your life. Forever. Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity. Now, in this life-changing book, handcrafted by the author over a rigorous four year period, you will discover the early-rising habit that has helped so many accomplish epic results while upgrading their happiness, helpfulness and feelings of aliveness."
                animationType="top"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={SorcerersStone}
                good_read_link="https://www.goodreads.com/book/show/42844155-harry-potter-and-the-sorcerer-s-stone"
                tooltip_blurb_text="Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'. Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!"
                animationType="bottom"
              />
            </div>
            <div className="books-card">
              <CardBook
                book_cover={ChamberOfSecrets}
                good_read_link="https://www.goodreads.com/book/show/15881.Harry_Potter_and_the_Chamber_of_Secrets"
                tooltip_blurb_text="Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike. And strike it does. For in Harry’s second year at Hogwarts, fresh torments and horrors arise, including an outrageously stuck-up new professor and a spirit who haunts the girls’ bathroom. But then the real trouble begins – someone is turning Hogwarts students to stone. Could it be Draco Malfoy, a more poisonous rival than ever? Could it possibly be Hagrid, whose mysterious past is finally told? Or could it be the one everyone at Hogwarts most suspects… Harry Potter himself!"
                animationType="top"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={PrisonerOfAzkaban}
                good_read_link="https://www.goodreads.com/book/show/5.Harry_Potter_and_the_Prisoner_of_Azkaban"
                tooltip_blurb_text="Harry Potter, along with his best friends, Ron and Hermione, is about to start his third year at Hogwarts School of Witchcraft and Wizardry. Harry can't wait to get back to school after the summer holidays. (Who wouldn't if they lived with the horrible Dursleys?) But when Harry gets to Hogwarts, the atmosphere is tense. There's an escaped mass murderer on the loose, and the sinister prison guards of Azkaban have been called in to guard the school..."
                animationType="bottom"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={GobletOfFire}
                good_read_link="https://www.goodreads.com/book/show/6.Harry_Potter_and_the_Goblet_of_Fire"
                tooltip_blurb_text="It is the summer holidays and soon Harry Potter will be starting his fourth year at Hogwarts School of Witchcraft and Wizardry. Harry is counting the days: there are new spells to be learnt, more Quidditch to be played, and Hogwarts castle to continue exploring. But Harry needs to be careful - there are unexpected dangers lurking..."
                animationType="top"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={OrderOfPhoenix}
                good_read_link="https://www.goodreads.com/book/show/2.Harry_Potter_and_the_Order_of_the_Phoenix"
                tooltip_blurb_text="Harry Potter is about to start his fifth year at Hogwarts School of Witchcraft and Wizardry. Unlike most schoolboys, Harry never enjoys his summer holidays, but this summer is even worse than usual. The Dursleys, of course, are making his life a misery, but even his best friends, Ron and Hermione, seem to be neglecting him. Harry has had enough. He is beginning to think he must do something, anything, to change his situation, when the summer holidays come to an end in a very dramatic fashion. What Harry is about to discover in his new year at Hogwarts will turn his world upside down..."
                animationType="bottom"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={HalfBloodPrince}
                good_read_link="https://www.goodreads.com/book/show/1.Harry_Potter_and_the_Half_Blood_Prince"
                tooltip_blurb_text="It is the middle of the summer, but there is an unseasonal mist pressing against the windowpanes. Harry Potter is waiting nervously in his bedroom at the Dursleys' house in Privet Drive for a visit from Professor Dumbledore himself. One of the last times he saw the Headmaster, he was in a fierce one-to-one duel with Lord Voldemort, and Harry can't quite believe that Professor Dumbledore will actually appear at the Dursleys' of all places. Why is the Professor coming to visit him now? What is it that cannot wait until Harry returns to Hogwarts in a few weeks' time? Harry's sixth year at Hogwarts has already got off to an unusual start, as the worlds of Muggle and magic start to intertwine..."
                animationType="top"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={fivePointSomeone}
                good_read_link="https://www.goodreads.com/book/show/105576.Five_Point_Someone"
                tooltip_blurb_text="Three hostelmates – Alok, Hari and Ryan get off to a bad start in IIT – they screw up the first class quiz. And while they try to make amends, things only get worse. It takes them a while to realize: If you try and screw with the IIT system, it comes back to double screw you. Before they know it, they are at the lowest echelons of IIT society. They have a five-point-something GPA out of ten, ranking near the end of their class. This GPA is a tattoo that will remain with them, and come in the way of anything else that matters – their friendship, their future, their love life. While the world expects IITians to conquer the world, these guys are struggling to survive."
                animationType="bottom"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={threeMistakes}
                good_read_link="https://www.goodreads.com/book/show/3320520-the-3-mistakes-of-my-life?ref=rae_1"
                tooltip_blurb_text="In late-2000, a young boy in Ahmedabad called Govind dreamt of having a business. To accomodate his friends Ish and Omi's passion, they open a cricket shop. Govind's wants to make money and thinks big. Ish is all about nurturing Ali, the batsman with a rare gift. Omi knows his limited capabiltiies and just wants to be with his friends. However, nothing comes easy in a turbulent city. To realize their goals, they will have to face it all - religious politics, earthquakes, riots, unacceptable love and above all, their own mistakes. Will they make it? Can an individual's dreams overcome the nightmares offered by real life? Can we succeed despite a few mistakes?"
                animationType="top"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={twoStates}
                good_read_link="https://www.goodreads.com/book/show/6969361-2-states"
                tooltip_blurb_text="Love marriages around the world are simple: Boy loves girl. Girl loves boy. They get married. In India, there are a few more steps: Boy loves Girl. Girl loves Boy. Girl's family has to love boy. Boy's family has to love girl. Girl's Family has to love Boy's Family. Boy's family has to love girl's family. Girl and Boy still love each other. They get married. Welcome to 2 States, a story about Krish and Ananya. They are from two different states of India, deeply in love and want to get married. Of course, their parents don't agrees. To convert their love story into a love marriage, the couple have a tough battle in front of them. For it is easy to fight and rebel, but it is much harder to convince. Will they make it?"
                animationType="bottom"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={OneNightAtTheCallCenter}
                good_read_link="https://www.goodreads.com/book/show/105578.One_Night_at_the_Call_Center"
                tooltip_blurb_text="Six friends work nights at a call center in India, providing technical support for a major U.S. appliance corporation. Skilled in patience–and accent management–they help American consumers keep their lives running. Yet behind the headsets, everybody’s heart is on the line. Shyam (Sam to his callers) has lost his self-confidence after being dumped by the girl who just so happens to be sitting next to him. Priyanka’s domineering mother has arranged for her daughter’s upscale marriage to an Indian man in Seattle. Esha longs to be a model but discovers it’s a horizontal romp to the runway. Lost, dissatisfied Vroom has high ideals, but compromises them by talking on the phone to idiots each night. Traditional Radhika has just found out that her husband is sleeping with his secretary. And Military Uncle (nobody knows his real name) sits alone working the online chat. They all try to make it through their shifts–and maintain their sanity–under the eagle eye of a boss whose ego rivals his incompetence. But tonight is no ordinary night. Tonight is Thanksgiving in Appliances are going haywire, and the phones are ringing off their hooks. Then one call, from one very special caller, changes everything."
                animationType="top"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={BombayRainsBombayGirls}
                good_read_link="https://www.goodreads.com/book/show/4241531-bombay-rains-bombay-girls?ac=1&from_search=true&qid=jE7QquCm66&rank=1"
                tooltip_blurb_text="On learning that I was going to study medicine in Bombay, someone had said to me, ' You've got to see two things in Bombay: the Bombay rains and the Bombay girls. 'When Adi - a small town eighteen year old with a gaint inferiority complex lands a chance to study medicine in big, bad Bombay, he is overjoyed. Although plagued by the thought that his success is a fluke and hence ill gotten, he plunges headlong into the sights and sound of this dazzling city. Adi's initiation into college life isn't the most promising...... A night of ragging by a bunch of sniggering seniors brings him and his equally vulnerable batch mates close to tears..... But gradually, he finds his feet in the world and makes friends with a motley crew. He also has his heart broken and falls in love ..... In that order."
                animationType="bottom"
              />
            </div>
          </div>
        </div>
        <p></p>
        <p></p>
      </Row>
    </>
  );
}

export default Bookstack;
