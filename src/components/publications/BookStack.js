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
import MurderOnTheOrientExpress from "../../img/books/MurderOnTheOrientExpress.jpg";

function Bookstack() {
  return (
    <>
      <Row>
        <Col md={9}>
          <div className="col-lg-10" style={{ marginTop: "50px" }}>
            <Bounce right duration={1000}>
              <h1 id="heading" className="purple">
                Books
              </h1>
            </Bounce>

            <div className="publications-text">
              <Bounce right duration={1000}>
                <p>
                  Not a book nerd as the picture suggest's but I am more kind of
                  a seasonal reader. But once I get into my reading mode, I want
                  to finish it off in a sitting or two. Starting with the
                  exchange of the{" "}
                  <span className="purple">
                    <b>Enid Blyton's</b>
                  </span>{" "}
                  & the{" "}
                  <span className="purple">
                    <b> Agatha Christie's</b>
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
              </Bounce>
              <Bounce left duration={1000}>
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
                  more recently, my curious neurons have made me reading about
                  {" "}
                  <span className="purple">
                    <b>
                       The Big Bang and the events that followed leading to the
                      creation of our Universe
                    </b>
                  </span>{" "}
                  which with it's continuous state of infinite expansion opens
                  us to a source of infinite knowledge.
                </p>
                <p></p>
              </Bounce>
              <Bounce right duration={1000}>
                <p>
                  The list below gives a glimplse of my part and parcel reading
                  activities...
                </p>
              </Bounce>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <Bounce top>
            <div style={{ marginTop: "60px", marginRight: "50px" }}>
              <img
                src={BookNerd}
                alt=""
                height={400}
                width={400}
              />
            </div>
          </Bounce>
        </Col>
      </Row>
      <Row>
        <div className="books-parent" id="booksSection">
          <Bounce left duration={1000}>
            <h2 id="heading" className="purple">
              Books I have read...
            </h2>
          </Bounce>
          <div className="all-books-container">
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
                book_cover={MurderOnTheOrientExpress}
                good_read_link="https://www.goodreads.com/book/show/853510.Murder_on_the_Orient_Express?ref=nav_sb_ss_3_7"
                tooltip_blurb_text="Just after midnight, a snowdrift stops the famous Orient Express in its tracks as it travels through the mountainous Balkans. The luxurious train is surprisingly full for the time of the year but, by the morning, it is one passenger fewer. An American tycoon lies dead in his compartment, stabbed a dozen times, his door locked from the inside.

                One of the passengers is none other than detective Hercule Poirot. On vacation.
                
                Isolated and with a killer on board, Poirot must identify the murderer—in case he or she decides to strike again."
                animationType="bottom"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={fivePointSomeone}
                good_read_link="https://www.goodreads.com/book/show/105576.Five_Point_Someone"
                tooltip_blurb_text="Three hostelmates – Alok, Hari and Ryan get off to a bad start in IIT – they screw up the first class quiz. And while they try to make amends, things only get worse. It takes them a while to realize: If you try and screw with the IIT system, it comes back to double screw you. Before they know it, they are at the lowest echelons of IIT society. They have a five-point-something GPA out of ten, ranking near the end of their class. This GPA is a tattoo that will remain with them, and come in the way of anything else that matters – their friendship, their future, their love life. While the world expects IITians to conquer the world, these guys are struggling to survive."
                animationType="top"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={threeMistakes}
                good_read_link="https://www.goodreads.com/book/show/3320520-the-3-mistakes-of-my-life?ref=rae_1"
                tooltip_blurb_text="In late-2000, a young boy in Ahmedabad called Govind dreamt of having a business. To accomodate his friends Ish and Omi's passion, they open a cricket shop. Govind's wants to make money and thinks big. Ish is all about nurturing Ali, the batsman with a rare gift. Omi knows his limited capabiltiies and just wants to be with his friends. However, nothing comes easy in a turbulent city. To realize their goals, they will have to face it all - religious politics, earthquakes, riots, unacceptable love and above all, their own mistakes. Will they make it? Can an individual's dreams overcome the nightmares offered by real life? Can we succeed despite a few mistakes?"
                animationType="bottom"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={twoStates}
                good_read_link="https://www.goodreads.com/book/show/6969361-2-states"
                tooltip_blurb_text="Love marriages around the world are simple: Boy loves girl. Girl loves boy. They get married. In India, there are a few more steps: Boy loves Girl. Girl loves Boy. Girl's family has to love boy. Boy's family has to love girl. Girl's Family has to love Boy's Family. Boy's family has to love girl's family. Girl and Boy still love each other. They get married. Welcome to 2 States, a story about Krish and Ananya. They are from two different states of India, deeply in love and want to get married. Of course, their parents don't agrees. To convert their love story into a love marriage, the couple have a tough battle in front of them. For it is easy to fight and rebel, but it is much harder to convince. Will they make it?"
                animationType="top"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={OneNightAtTheCallCenter}
                good_read_link="https://www.goodreads.com/book/show/105578.One_Night_at_the_Call_Center"
                tooltip_blurb_text="Six friends work nights at a call center in India, providing technical support for a major U.S. appliance corporation. Skilled in patience–and accent management–they help American consumers keep their lives running. Yet behind the headsets, everybody’s heart is on the line. Shyam (Sam to his callers) has lost his self-confidence after being dumped by the girl who just so happens to be sitting next to him. Priyanka’s domineering mother has arranged for her daughter’s upscale marriage to an Indian man in Seattle. Esha longs to be a model but discovers it’s a horizontal romp to the runway. Lost, dissatisfied Vroom has high ideals, but compromises them by talking on the phone to idiots each night. Traditional Radhika has just found out that her husband is sleeping with his secretary. And Military Uncle (nobody knows his real name) sits alone working the online chat. They all try to make it through their shifts–and maintain their sanity–under the eagle eye of a boss whose ego rivals his incompetence. But tonight is no ordinary night. Tonight is Thanksgiving in Appliances are going haywire, and the phones are ringing off their hooks. Then one call, from one very special caller, changes everything."
                animationType="bottom"
              />
            </div>

            <div className="books-card">
              <CardBook
                book_cover={BombayRainsBombayGirls}
                good_read_link="https://www.goodreads.com/book/show/4241531-bombay-rains-bombay-girls?ac=1&from_search=true&qid=jE7QquCm66&rank=1"
                tooltip_blurb_text="On learning that I was going to study medicine in Bombay, someone had said to me, ' You've got to see two things in Bombay: the Bombay rains and the Bombay girls. 'When Adi - a small town eighteen year old with a gaint inferiority complex lands a chance to study medicine in big, bad Bombay, he is overjoyed. Although plagued by the thought that his success is a fluke and hence ill gotten, he plunges headlong into the sights and sound of this dazzling city. Adi's initiation into college life isn't the most promising...... A night of ragging by a bunch of sniggering seniors brings him and his equally vulnerable batch mates close to tears..... But gradually, he finds his feet in the world and makes friends with a motley crew. He also has his heart broken and falls in love ..... In that order."
                animationType="top"
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
