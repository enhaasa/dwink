/*
[Major build number].[Minor build number].[Patch]
*/

const nsfwCards = [
    { prompts: ["Would you kiss {}? If your answer is no: that’s rude. Finish your drink."] },
    { prompts: ["Who would you rather be locked in a closet with: {}, {} or {}?"] },
    { prompts: ["How many sexual partners do you think {} has had? If you’re wrong, you drink. If you’re correct, they drink for each sexual partner they have had."] },
    { prompts: ["What do you think is the hottest thing about {}? Also, take a sip."] },
    { prompts: ["Who would you ship with {}? Both of them have to drink."] },
    { prompts: ["Who do you think is the most attractive person in this round? If you don’t want to tell us take five sips."] },
    { prompts: ["If you would have sex with another player, take a drink."] },
    { prompts: ["Everyone who has masturbated today takes two sips of their drink."] },
    { prompts: ["Whoever does not fake an orgasm with everyone else in the next three seconds have to finish their drink."] },
    { prompts: ["What do you think about when you masturbate? What do you watch?", "Take three sips."] },
    { prompts: ["Would you have sex with someone of the same gender?"] },
    { prompts: ["Who do you think is the kinkiest person present? Let them have a sip of their drink."] },
    { prompts: ["Those who would have sex with the person on their right (next person in the call) drink."] },
    { prompts: ["Those who would make out with the person on their left (next person in the call) drink."] },
    { prompts: ["If you’ve ever been tied up sexually take a sip of your drink."] },
    { prompts: ["If you’ve ever tied someone else up for sexual reasons take a sip of your drink."] },
    { prompts: ["Those who have read or watched Fifty Shades drink. Read and watched? – Take five sips. Watched all three movies? – Finish your drink you horny fuck."] },
    { prompts: ["Have two sips for every person you would kiss in this group. If you tell us who you would kiss, you only have to take one sip for each person."] },
    { prompts: ["Those who are not wearing underwear right now take five sips."] },
    { prompts: ["Is there a person here which you would like to take out on a date? If so, tell us or take five sips."] },
    { prompts: ["Those who have had fantasized about someone present in bed take three sips."] },
    { prompts: ["If you’ve ever sent something naughty to someone present take five sips."] },
    { prompts: ["You’re now {}’s slave. You must do everything they tell you to for the next five cards."] },
    { prompts: ["Never have I ever pretended to be drunk."] },
    { prompts: ["Never have I ever had anal sex."] },
    { prompts: ["Never have I ever had sex with more than one person at once."] },
    { prompts: ["Never have I ever had a crush on someone in this group."] },
    { prompts: ["Never have I ever had sex with more than one person on a single day."] },
    { prompts: ["Never have I ever had sex in public."] },
    { prompts: ["Never have I ever masturbated in public."] },
    { prompts: ["Never have I ever sent a naughty picture."] },
    { prompts: ["Never have I ever sent a lewd to someone in this group."] },
    { prompts: ["Never have I ever had phone sex."] },
    { prompts: ["Never have I ever faked an orgasm."] },
    { prompts: ["Never have I ever made an account on a pornsite."] },
    { prompts: ["Never have I ever been caught watching porn."] },
    { prompts: ["Never have I ever watched gay porn."] },
    { prompts: ["Never have I ever watched hentai."] },
    { prompts: ["Never have I ever woken up next to someone I didn’t know."] },
    { prompts: ["Never have I ever been caught masturbating."] },
    { prompts: ["Never have I ever been caught having sex."] },
    { prompts: ["Never have I (or my partner) had to take Plan B (The Pill After)."] },
    { prompts: ["Never have I ever owned a sex toy."] },
    { prompts: ["Never have I or my partner ever taken Viagra."] },
    { prompts: ["Never have I ever been choked or choked someone else during sex."] },
    { prompts: ["Never have I ever had sex with someone I wasn’t physically attracted to."] },
    { prompts: ["Never have I ever been to a strip club."] },
    { prompts: ["Never have I ever given or received a lap dance."] },
    { prompts: ["Never have I ever had a wet dream."] },
    { prompts: ["Never have I ever used a flavoured condom."] },
    { prompts: ["Never have I ever had a crush on someone who was taken."] },
    { prompts: ["Never have I ever had a lewd dream about someone present."] },
    { prompts: ["Never have I ever been to a sex shop."] },
    { prompts: ["Never have I ever given or received head."] },
    { prompts: ["Never have I ever had sex where the condom ripped."] },
    { prompts: ["Never have I ever masturbated in the shower."] },
    { prompts: ["Never have I ever had sex in the shower or in the bath tub."] },
    { prompts: ["Never have I ever had sex while being drunk."] },
    { prompts: ["Never have I ever been insulted during sex and liked it."] },
    { prompts: ["Never have I ever doubted/questioned my sexuality."] },
    { prompts: ["Never have I ever received a photo of someone’s genitals."] },
    { prompts: ["Never have I ever used lube."] },
    { prompts: ["Never have I ever tried/smoked weed."] },
    { prompts: ["Never have I ever drank alcohol."] },
    { prompts: ["Never have I ever tried/smoked cigarettes."] },
    { prompts: ["Never have I ever rented a hotel room just to have intercourse."] },
    { prompts: ["Never have I ever recorded myself having sex or pleasuring myself."] },
    { prompts: ["Never have I ever been on a blind date."] },
    { prompts: ["Never have I ever kissed someone of the same sex."] },
    { prompts: ["Never have I ever regretted masturbating to something."] },
    { prompts: ["Never have I ever been interested in BDSM."] },
    { prompts: ["Never have I ever gotten rejected a kiss."] },
    { prompts: ["Never have I ever gotten dumped/rejected."] },
    { prompts: ["Never have I ever had a crush on someone who didn’t like me back."] },
    { prompts: ["Never have I ever recorded myself climaxing just because I wanted to find out what I sound like."] },
    { prompts: ["Drink for every sexual partner you’ve had."] },
    { prompts: ["When was the last time you had sex? Tell us or have five sips."] },
    { prompts: ["When was the last time you’ve had an orgasm? Tell us or have five sips."] },
    { prompts: ["Who do you think wants to get laid right now the most? Make them drink because they’re too thirsty."] },
    { prompts: ["Read out the last message you’ve sent to someone.", "Take three sips."] },
    { prompts: ["Show us your favourite pair of underwear/bra (not on you)", "take four sips."] },
    { prompts: ["Remove one item of your clothing or take four sips."] },
    { prompts: ["Tell us your most embarrassing sex story or take four sips."] },
    { prompts: ["Who do you think likes anal sex the most? They have to take three sips."] },
    { prompts: ["Tell us your most favourite sex position or take two sips."] },
    { prompts: ["What do you think is {}’s favourite sex position? If you’re correct they have to two sips, if you’re wrong you have to take four sips."] },
    { prompts: ["{} decides on your porn star name. Everyone has to call you by your new name for the rest of the game."] },
    { prompts: ["Which of {}’s body parts would you like to lick the most? Have two sips after just for fun."] },
    { prompts: ["What do you prefer? Wild/rough or more gentle/romantic sex? Also, have two sips."] },
    { prompts: ["Who do you think is the most flirtiest person present? Make them take two sips."] },
    { prompts: ["Who do you think is the most dirty-minded person present? Make them take three sips because they’re too thirsty *bonk*."] },
    { prompts: ["If {} was in a porn video what would you name it? "] },
    { prompts: ["Who would you be most likely to date in this group? Choose someone or take ten sips."] },
    { prompts: ["{} is now your daddy. Call them by daddy for the rest of the game. Drink everytime you forget."] },
    { prompts: ["{} is now your master. Call them by master for the rest of the game. Drink everytime you forget."] },
    { prompts: ["Who of the people present do you think is the best at giving oral sex? Make them take three sips."] },
    { prompts: ["Who of this group do you think is the best kisser? Make them take two sips."] },
    { prompts: ["Who of the people present attracts you the most physically? Make them take two sips."] },
    { prompts: ["If you’ve had sex within the last 24 hours take four sips. "] },
    { prompts: ["Who of the people present do you think sends the most naughty pictures? Make them take three sips."] },
    { prompts: ["We don’t care if you’re a virgin or not but if you could lose your virginity to someone present, who would it be? Both of you take two sips."] },
    { prompts: ["What are you into? Tell us about all your kinks!", "Take five sips."] },
    { prompts: ["Tell us what you masturbated to last time.",  "Take three sips."] },
    { prompts: ["If the only person you can have sex with for the rest of your life has to be chosen from the people that are present, who would you choose? Both of you drink."] },
    { prompts: ["How long has your longest relationship lasted for? If it was less than six months, take six sips."] },
    { prompts: ["What is the highest number of orgasms you’ve ever had in one day?"] },
    { prompts: ["Drink for each person you’ve slept with."] },
    { prompts: ["The person who you think has the most lewd pictures in their phone gallery has to take three sips."] },
    { prompts: ["Between {}, {} and {} who would you kill, who would you marry and who would you fuck?"] },
    { prompts: ["Between {}, {} and {} who would you kill, who would you marry and who would you fuck?"] },
    { prompts: ["Between {}, {} and {} who would you kill, who would you marry and who would you fuck?"] },
    { prompts: ["Everyone who likes to get spanked takes a sip."] },
    { prompts: ["Who do you think watches the most porn? That person has to take three sips."] },
    { prompts: ["Those who have imagined someone else present tonight naked, take two sips. If you haven’t yet, you’re very welcome."] },
    { prompts: ["Who of those people that are present right now would you like to have a threesome with? Each of you take two sips."] },
    { prompts: ["Tell us a sexual fantasy of yours that you haven’t fulfilled yet.", "Take three sips."] },
    { prompts: ["Get a bottle or a banana and pretend you’re sucking it off for ten seconds or take ten sips."] },
    { prompts: ["Send {} something naughty in your dm’s or take six sips."] },
    { prompts: ["Would you have sex with {}? If yes, drink two sips with them. If not, you drink eight sips alone."] },
    { prompts: ["Show us the most recent lewd you have taken of yourself (no nudes!) or take ten sips."] },
    { prompts: ["Remove two items of your clothing or take six sips."] },
    { prompts: ["Would you rather have sex with {}, {} or {}? Both of you have five sips."] },
    { prompts: ["If you wanted to sleep with {}, what would you do to win their heart? Take six sips if you wouldn’t want to sleep with them at all."] },
    { prompts: ["If easily accessible, take off your panties (or bra) without actually flashing anyone or take seven sips."] },
    { prompts: ["Send {} a lewd snap/dm or take a shot."] },
    { prompts: ["Moan {}'s name.", "Take 10 sips."] },
    { prompts: ["Take off your top for 2 cards.", "Take 10 sips."] },
    { prompts: ["Would you rather give head to {} or receive head by {}?."] }
];

const normalCards = [
    { prompts: ["Give {} two compliments about their appearance", "Take two sips."] },
    { prompts: ["Say two nice things about {} ", "take two sips."] },
    { prompts: ["Tell us what you like most about {} ", "take two sips."] },
    { prompts: ["Tell us what you think about {} ", "take two sips."] },
    { prompts: ["Tell us what you appreciate about {} ", "take two sips."] },
    { prompts: ["Would you be able to keep a spicy secret {} has told you? Have a sip."] },
    { prompts: ["Go on any social media you and {} have in common. Tag them and let everyone know how much you appreciate them with a post. Also, both of you take a sip."] },
    { prompts: ["Do whatever {} wants you to do ", "take two sips."] },
    { prompts: ["Go around naming everyones first (real) name. Drink for every person you get wrong."] },
    { prompts: ["You are not allowed to speak English for the next two cards. If you do, you drink."] },
    { prompts: ["Who do you appreciate the most out of this group? Let that person have a sip because they’re awesome."] },
    { prompts: ["You’re now the CHUG KING. Shout ‘’CHUG’’ at any moment you like to make everyone finish their drinks. This can only be used once."] },
    { prompts: ["You’re now the QUESTION MASTER. Anyone who answers any of your questions for the next three rounds has to drink."] },
    { prompts: ["NO SWEARING for the next three cards for you. If you swear, you drink."] },
    { prompts: ["Down your drink and take a shot."] },
    { prompts: ["Everyone ignore this player for one entire round. If you don’t, you drink."] },
    { prompts: ["Who do you like the most out of this group? Your favourite person may have two sips of their drink."] },
    { prompts: ["Say one nice thing to each person present."] },
    { prompts: ["Put on your shirt/top backwards.", "Take three sips."] },
    { prompts: ["Take a shot (if you don’t have anything shot-able then take six sips)"] },
    { prompts: ["Take two shots (if you don’t have anything shot-able then take twelve sips)."] },
    { prompts: ["Take five sips."] },
    { prompts: ["Take two sips."] },
    { prompts: ["Take six sips."] },
    { prompts: ["Pick two people that have to read out their last text message that they’ve received. If they don’t want to read them out loud, they drink."] },
    { prompts: ["Finish your current drink."] },
    { prompts: ["Play a round of ‘’never have I ever’’."] },
    { prompts: ["Stare and smile into the camera for 5 seconds and try your best not to make it awkward or take two sips."] },
    { prompts: ["Let {} decide what you should post (text) on one of your socials", "take two sips."] },
    { prompts: ["Let {} decide what you should take a picture of or what kind of picture you should upload on one of your socials or take five sips."] },
    { prompts: ["Introduce yourself in your first language", "take two sips."] },
    { prompts: ["Take a selfie, let {} decide the caption and upload it to one of your socials."] },
    { prompts: ["Hands up! The last one to put their hands up takes five sips."] },
    { prompts: ["Tell us who you like the most in this group", "take five sips."] },
    { prompts: ["Find a hat or sunglasses and wear them for the next 5 cards", "take five sips."] },
    { prompts: ["You’re feeling very generous, so you’re handing out 10 sips to the group or to someone that seems dehydrated."] },
    { prompts: ["The person with the fullest glass has to finish their drink."] },
    { prompts: ["The person with the least in their glass gets to hand out 10 sips to the rest of the group."] },
    { prompts: ["Give out three sips to the person who you think has made a teacher cry."] },
    { prompts: ["Give out five sips to the person you’ve known the longest."] },
    { prompts: ["You and the person you’ve known the shortest for each drink six sips."] },
    { prompts: ["Everyone drinks."] },
    { prompts: ["Just drink. "] },
    { prompts: ["BOTTOMS UP! Everyone must down their drink."] },
    { prompts: ["Never have I ever pretended to be drunk."] },
    { prompts: ["The person who you think will get married first has to take three sips."] },
    { prompts: ["If you could choose two people in this group, who would you want to be your mommy and daddy? Both of them have to take one sip."] },
    { prompts: ["Tell us 2 truths and 1 lie. The people that guess correctly don’t have to drink this time."] },
    { prompts: ["With whom would you want to exchange one day of your life? Drink with them."] },
    { prompts: ["Who do you think is the most mature person present? They drink five sips because of how responsible they are."] },
    { prompts: ["Who do you think is the most childish person present? They have to take one sip only because we don’t tolerate underaged drinking on here."] },
    { prompts: ["Take a couple of sips of your drink without using your hands."] },
    { prompts: ["Have a glass of water because it’s good for you and your liver."] },
    { prompts: ["Tell a joke and hand out as many sips as people have laughed. If nobody laughed, take five sips."] },
    { prompts: ["Who do you think has the nicest smile in this group? Let them have a sip."] },
    { prompts: ["Have five sips each with the person you’re the closest with in this group."] },
    { prompts: ["Everyone has to take two sips except for you."] },
    { prompts: ["End every single sentence with ‘’nya’’ for the next five cards. Drink everytime you forget about it."] },
    { prompts: ["What’s your favourite dish? Everyone who dislikes that dish has to drink."] },
    { prompts: ["Never have I ever played a drinking game. Hehe."] },
    { prompts: ["Choose one person of the group that you would take on vacation with you. You both take three sips."] },
    { prompts: ["Everyone that has a driver’s license takes two sips."] },
    { prompts: ["Everyone with a piercing takes two sips."] },
    { prompts: ["Everyone with a tattoo takes two sips."] },
    { prompts: ["Everyone who has dyed their hair takes two sips."] },
    { prompts: ["You now have to raise your hand everytime you want to say something for the next five cards."] },
    { prompts: ["Hand out as many drinks as there are letters in your name."] },
    { prompts: ["Who do you think is the most innocent person present? Make them take five sips because we need to change something about that."] },
    { prompts: ["If you had to hug someone for an entire hour in this group who would it be? Both of you take two sips."] },
    { prompts: ["If you could choose, which super power would you like to have? Everyone who wants the same power has to take two sips"] },
    { prompts: ["Everyone who is single drinks."] },
    { prompts: ["Everyone in a relationship drinks."] },
    { prompts: ["Everyone drinking wine takes two sips."] },
    { prompts: ["Everyone drinking beer takes two sips."] },
    { prompts: ["Start drinking. Everyone else has to drink as long as you’re still drinking."] },
    { prompts: ["Never have I ever thrown up because of alcohol."] },
    { prompts: ["Everyone with a cat has to drink. If you own more than one, take a sip for each."] },
    { prompts: ["Everyone with a dog has to drink. If you own more than one, take a sip for each."] },
    { prompts: ["Everyone that likes to watch anime has to take two sips."] },
    { prompts: ["Tell each person whether they are going to heaven or hell. Everyone that is going to hell takes six sips of their drink."] },
    { prompts: ["From now on, every time {} drinks, so should you."] },
    { prompts: ["Never have I ever watched a horror movie alone."] },
    { prompts: ["The game is in your hands. Come up with a rule that everyone has to follow from now on for the rest of the game. Also, have a sip of your drink."] },
    { prompts: ["Would you rather hire {} or {} as your hitman? Your hitman drinks."] },
    { prompts: ["Who would you rather rob a bank with, {} or {}? Your new partner in crime drinks with you."] },
    { prompts: ["The tallest person present takes two sips!"] },
    { prompts: ["The shortest person present takes two sips!"] },
    { prompts: ["Drink if you’ve got a crush on someone."] },
    { prompts: ["{} has to come up with a word which you will have to say out loud every time you are about to drink."] },
    { prompts: ["Who do you think is the craziest person in this group? Make them have two sips."] },
    { prompts: ["Listen carefully to what {} has to tell you. While you’re listening you shall have a few sips of your drink."] },
    { prompts: ["If everyone else in this group was your child, what advice would you give your children? Also, take three sips because you’re someone responsible to look up to."] },
    { prompts: ["If you witnessed {} kill someone in front of you, would you help them cover up and hide the crime? Both of you drink if you would. You drink on your own if you wouldn’t."] },
    { prompts: ["{} chooses a word that you have to write on your arm/hand. Every time you say that word you have to hold it up and show it to the rest of the group. Each time you forget you have to take a sip."] },
    { prompts: ["Who do you think would make the best president in this group? Let the new president have two sips of their drink."] },
    { prompts: ["What would be the first thing you’d do if you had the ability to turn invisible? Drink if it’s something dirty."] },
    { prompts: ["Give us your best movie villain laugh.", "Take three sips."] },
    { prompts: ["When was the last person you had to help someone who was drunk? If they are present, both of you have to take two sips."] },
    { prompts: ["The youngest person present has to drink."] },
    { prompts: ["The oldest person present has to drink. "] },
    { prompts: ["The person with their birthday coming up next has to drink two sips."] },
    { prompts: ["Never have I ever written a love letter."] },
    { prompts: ["You must speak with your tongue out of your mouth for the next two cards."] },
    { prompts: ["For the next five cards it is forbidden to use people’s actual names, so be creative. If you screw up, you have to take two sips each time."] },
    { prompts: ["Explain the last dream you can remember and have everyone take a sip with you."] },
    { prompts: ["Who do you think will end up the most drunk tonight? You take three sips for them because we want them to stick around a little longer today."] },
    { prompts: ["Everyone wearing glasses takes two sips."] },
    { prompts: ["Everyone with blonde hair takes two sips."] },
    { prompts: ["Everyone with brown hair takes two sips."] },
    { prompts: ["Everyone with black hair takes two sips."] },
    { prompts: ["Everyone with ginger hair takes two sips."] },
    { prompts: ["Everyone with a beard takes two sips."] },
    { prompts: ["Everyone with crazy coloured hair takes two sips."] },
    { prompts: ["Everyone with brown eyes takes two sips."] },
    { prompts: ["Everyone with green eyes takes two sips."] },
    { prompts: ["Everyone with blue eyes takes two sips."] },
    { prompts: ["Everyone drinks for every sibling they have."] },
    { prompts: ["You have to whisper for the next five cards. Drink whenever you don’t."] },
    { prompts: ["Pretend you’re proposing to {}", "take five sips."] },
    { prompts: ["You’re {}’s pet for the next five cards. Listen to your owner."] },
    { prompts: ["The first person to burp right now hands out ten sips to everyone else."] },
    { prompts: ["Get everyone else in the group to laugh. Don’t stop laughing until someone else gets it. Everyone that laughed has to drink. If no one laughs you have to take three sips of your drink."] },
    { prompts: ["Everyone born in Spring takes a sip."] },
    { prompts: ["Everyone born in Summer takes a sip."] },
    { prompts: ["Everyone born in Autumn takes a sip."] },
    { prompts: ["Everyone born in Winter takes a sip."] },
    { prompts: ["The person with the shortest hair takes two sips."] },
    { prompts: ["The person with the longest hair takes two sips."] },
    { prompts: ["Have some water."] },
    { prompts: ["Who do you think is the cutest person present? Let them have a sip of their drink."] },
    { prompts: ["If it’s someone’s birthday, the birthday kid hands out ten sips. If it’s not anyone’s birthday, everyone takes two sips."] },
    { prompts: ["Give out three sips to the person who is most likely to not remember what happened the night before."] },
    { prompts: ["Choose the smartest person in the group and let them have three sips of their drink."] },
    { prompts: ["Pick a person that has to finish the rest of their current drink."] },
    { prompts: ["Choose a word that is going to be banned for the next five cards. If someone says it, they drink."] },
    { prompts: ["CHEERS! Everyone takes ten sips or a shot."] },
    { prompts: ["SSSHH! You cannot speak for the next two cards. If you speak, you drink."] },
    { prompts: ["Never have I recorded myself singing just because I wanted to find out what I sound like."] },
    { prompts: ["Never have I ever uploaded a video to YouTube."] },
    { prompts: ["Never have I ever made a tinder account."] },
    { prompts: ["Never have I ever made an account on any dating website/app."] },
    { prompts: ["Never have I ever skipped a shower."] },
    { prompts: ["Never have I ever forgotten someone’s birthday."] },
    { prompts: ["Never have I ever forgotten someone’s name."] },
    { prompts: ["Never have I ever had a one night stand."] },
    { prompts: ["Never have I ever subscribed to a twitch streamer."] },
    { prompts: ["Never have I ever donated money to a twitch streamer."] },
    { prompts: ["Never have I ever performed in a band/choir."] },
    { prompts: ["Never have I ever been on stage (not for school)."] },
    { prompts: ["Never have I ever passed out at a party."] },
    { prompts: ["Never have I ever skipped reading a privacy policy."] },
    { prompts: ["Never have I ever had to run from the police."] },
    { prompts: ["How many people that are present here have you seen in real life before? Take a sip for each of them."] },
    { prompts: ["Everyone who dislikes milk has to take two sips."] },
    { prompts: ["Everyone who dislikes cheese has to take two sips."] },
    { prompts: ["Everyone who likes pineapple on pizza has to take two sips."] },
    { prompts: ["Never have I ever tried banana on pizza. (Don’t do it)"] },
    { prompts: ["Everyone with a mixed drink has to take three sips."] },
    { prompts: ["{} drinks with you."] },
    { prompts: ["Pick another player to take two sips with you."] },
    { prompts: ["Drink for every letter in your name."] },
    { prompts: ["How did you meet {}? Both of you drink. "] },
    { prompts: ["Pick three players to drink with you."] },
    { prompts: ["{} and {} have to drink with you."] },
    { prompts: ["The last person to raise their drink has to drink. CHEERS!"] },
    { prompts: ["Finish your drink within ten seconds. If you make it, everyone else has to finish their drink too."] },
    { prompts: ["The person with the biggest shoe size has to drink."] },
    { prompts: ["Fill up your glass/cup and down it."] },
    { prompts: ["Pick the player with the nicest eyes and let them have a sip."] },
    { prompts: ["Anyone who has eaten during this game has to take two sips."] },
    { prompts: ["Do we have more cat or dog people here? The losing side has to drink."] },
    { prompts: ["The next time you have to go to the bathroom, you have to finish your drink."] },
    { prompts: ["Pick a person that has to finish their drink the next time they have to go to the bathroom."] },
    { prompts: ["Anyone with a one syllable name must take two sips."] },
    { prompts: ["Everyone who can play an instrument has to drink."] },
    { prompts: ["{} will tell you what your next drink is. Let them know about your options."] },
    { prompts: ["Tell {} what their next drink is. They have to let you know about their options."] },
    { prompts: ["Write down another player’s name. {} has to guess whose name you’ve written down. If they’re correct, you drink. If they’re wrong, they drink."] },
    { prompts: ["If today is Friday, everyone has to drink. If not, only you have to take a sip."] }
];

const gameCards = [];
let players = [];
const settings = {};

let currentCardIndex = 0;
let playerInTurn = 0;

/* Advance playerInTurn one step */ 
function advancePlayerInTurn() {
    if (playerInTurn < players.length -1) {
        playerInTurn ++;
    }
    else {
        playerInTurn = 0;
    }
}

/* Shuffle players array in random order and push into players array */
function shufflePlayerList() {
    shuffle(players);

    playerInTurn = 0;
}

function shuffleCards() {
    shuffle(gameCards);
}

/* Fisher-Yates shuffle method, shamelessly stolen code */ 
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
}

function generateCards() {
    gameCards.push(...normalCards);

    if (isNSFWEnabled()) {
        console.log('nsfw enabled');
        gameCards.push(...nsfwCards);
    }
}

function start()
{
    generateCards();

    shufflePlayerList();
    shuffleCards();

    refreshPlayerList();
    refreshMessageText();

    draw();
}

/* Gathered function order for picking a new card */
function draw() {
    
    /* Get a random card and display in card-container */
    getNextCard();

    /* Update playerlist with current playerInTurn */ 
    refreshPlayerList();

    /* Update message text with current playerInTurn */ 
    refreshMessageText();

    /* Advance to next player */
    advancePlayerInTurn();
}

/* Picks X amount of random players from the players array and returns as an array */
function getRandomPartner(amountOfPartners) {
    var partners = [];

    for (i = amountOfPartners; i > 0; i--){
        var rollAgain = true;

        while (rollAgain) {
            var randomNumber = Math.floor(Math.random() * players.length);

            /* Cannot return playerInTurn or an already added partner */ 
            if (randomNumber !== playerInTurn && partners.includes(players[randomNumber]) == false ) {
                rollAgain = false;
                partners.push(players[randomNumber]);
            }
        }
    }

    return partners;
}

/* Update playerlist with current playerInTurn */ 
function refreshPlayerList() {

    const playerList = document.getElementById('game-player-list');

    /* Clear element */
    playerList.innerHTML = "";

    for (player in players) {
        if (player == playerInTurn) {
            playerList.innerHTML += "<li class='active'><b>" + players[player].name + "</b></li>";
        }
        else {
            playerList.innerHTML += "<li class='inactive'>" + players[player].name + "</li>";
        }
    }
}

/* Update message-field with current playerInTurn */
function refreshMessageText() {
    const messageContainer = document.getElementById('message-field');

    messageContainer.innerHTML = "It's your turn, <b class='active'>" + players[playerInTurn].name + " </b>!";
}

/* Grab players from sessionStorage and push into players array */
function getPlayerStorage(key) {
    let storage = JSON.parse(sessionStorage.getItem(key));
    players = storage;
}

function isNSFWEnabled() {
    return !!sessionStorage.getItem('is_nsfw');
}

function getNextCard() {

    if (currentCardIndex >= gameCards.length) {
        currentCardIndex = 0;

        shuffleCards();
    }

    const card = gameCards[currentCardIndex++];
    const prompts = card.prompts;
    
    const fmtPrompts = prompts.map(prompt => {
        let lastIndex = 0;
        let partnerCount = 0;

        while (prompt.indexOf('{}', lastIndex) != -1) {
            lastIndex = prompt.indexOf('{}', lastIndex) + '{}'.length;
            partnerCount++;
        }   

        const partners = getRandomPartner(partnerCount);

        while (partnerCount--) {
            
            prompt = prompt.replace('{}', partners[partnerCount]);
        }

        return prompt;
    });

    renderCard(fmtPrompts);
}

function renderCard(prompts) {
    const separator = document.getElementById("card-separator");
    const cardUpper = document.getElementById("card-upper");
    const cardLower = document.getElementById("card-lower");
    const cardContainer = document.getElementById("card-container");

    cardUpper.innerHTML = '';
    cardLower.innerHTML = '';

    if (prompts.length == 1) {
        separator.style.display = "none";
        cardLower.style.display = "none";

        cardUpper.innerText += prompts[0];
    }

    else if (prompts.length >= 2) {
        separator.style.display = "block";
        cardLower.style.display = "block";
        cardContainer.style.alignContent = "";

        cardUpper.innerText += prompts[0];
        cardLower.innerText += prompts[1];
    }
}

function addPlayer(player) {
    if (!players.includes(player) && player.name != "") {
        players.push(player);
    
    sessionStorage.setItem("players", JSON.stringify(players));
    
    refreshPlayerList();
    }
}