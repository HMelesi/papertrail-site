import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";

const HowTo = ({ setPathname }) => {
  useEffect(() => {
    setPathname("/how-to");
  });

  return (
    <div>
      <h2 className="page__header">Start a papertrail</h2>

      <Collapsible trigger="Read the book" className="collapsible__head">
        <p className="collapsible__content">
          If you’re buying online, consider doing so in a way that supports your
          local bookshop.
        </p>
      </Collapsible>

      <Collapsible trigger="Post online" className="collapsible__head">
        <p className="collapsible__content">
          If you like the book and it made you think, post about it online with
          a photo of the book and a little bit about why you liked it. You could
          post on Insta, on Twitter, on Facebook, on your personal blog…
          Wherever takes your fancy.
        </p>
      </Collapsible>
      <Collapsible trigger="Let us know" className="collapsible__head">
        <p className="collapsible__content">
          When you post the photo with your thoughts, we’d love it if you’d tag
          us (@the_papertrail_) and chuck in a few Papertrail hashtags for good
          measure, e.g. #papertrail (original, that one…) #FollowThePapertrail
          #GiveACoverToAnother #pagerage (for a book that plunged you into
          righteous anger - see e.g. Invisible Women…) #LiberateAMate (that
          one’s a pun on the Latin for book, ‘liber’ - yes it’s geeky, and no we
          don’t care)
        </p>
      </Collapsible>

      <Collapsible trigger="Leave a message" className="collapsible__head">
        <p className="collapsible__content">
          Inside the front cover of the book, write something explaining it’s
          part of a papertrail and what to do to join in. Ideally, this would
          include the @the_papertrail_ handle so other people can join the
          online discussion. As an example, what we’ve written in the books
          we’ve started papertrails with is: Books to make you think…
          @the_papertrail_ www.thepapertrail.co.uk Add your name and send it on
          to continue the papertrail!
        </p>
      </Collapsible>

      <Collapsible trigger="Sign it" className="collapsible__head">
        <p className="collapsible__content">
          Then underneath that, write your name inside the front cover of the
          book. The idea is that everyone who reads the book as part of a
          papertrail will add theirs. Then we’ll have a nice list of everyone
          who’s read the book for posterity - and who knows, perhaps you’ll come
          across each other on social media when you post your thoughts!
        </p>
      </Collapsible>

      <Collapsible trigger="Send it on" className="collapsible__head">
        <p className="collapsible__content">
          Send the book to a friend you think would enjoy it and ask them to
          follow the same procedure and pass it on when they’re done. Can’t
          think of a suitable friend? Do a shout-out on social media (using our
          tags may help you reach a fellow Papertrailer!) or ask us and we can
          put you in touch with someone.
        </p>
      </Collapsible>

      <p className="page__content">...then repeat with a new book!</p>
      <h2 className="page__header">Continue a papertrail</h2>
      <p className="page__content">
        Someone’s sent you a papertrail book. Now what? It’s simple - read the
        book, then follow the steps above. And when you’ve done that, why not
        buy a book (we recommend choosing an independent bookshop or an online
        marketplace that supports them) and start your own #papertrail?<br></br>
        <br></br>
        What could be easier? We can’t wait to see your papertrails get started!
      </p>
    </div>
  );
};

export default HowTo;
