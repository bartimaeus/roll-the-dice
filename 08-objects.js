/*
 * Objects are data structures that allow us to
 * store a variety of data. This data is usually
 * stored in key/value pairs.
 *
 * Here is an example based on our user.
 *
 *    const player = {
 *      name: 'Eric',
 *      rolls: [],
 *      score: 0,
 *      average: 0,
 *    };
 *
 * In order to access data within an object
 * we use the square brackets []; however, instead
 * of providing an index we use the key of the
 * object.
 *
 *    const player =  {
 *      name: 'Eric',
 *      rolls: [],
 *      score: 0,
 *      average: 0,
 *    };
 *
 *    console.log("Eric's averge is " + player["average"]);
 *    => "Eric's average is 0"
 *
 *    console.log(player["name"] + "'s score is " + player["score"]);
 *    => "Eric's score is 0"
 *
 * Another way to access the data of an object
 * is by using the dot syntax:
 *
 *    const player =  {
 *      name: 'Eric',
 *      rolls: [],
 *      score: 0,
 *      average: 0,
 *    };
 *
 *    console.log("Eric's averge is " + player.average);
 *    => "Eric's average is 0"
 *
 *    console.log(player.name + "'s score is " + player.score);
 *    => "Eric's score is 0"
 *
 * Okay, one more thing about objects.... You can use
 * then to hold functions!
 *
 *    // sum function
 *    const sum = (numbers) => numbers.reduce((a, b) => a + b)
 *
 *    const player =  {
 *      name: 'Eric',
 *      rolls: [1, 2, 4, 5],
 *      score: function() {
 *        return sum(this.rolls);
 *      },
 *      average: function() {
 *        return sum(this.rolls) / this.rolls.length;
 *      },
 *    };
 *
 *    console.log("Eric's averge is " + player.average());
 *    => "Eric's average is 3"
 *
 *    console.log(player.name + "'s score is " + player.score);
 *    => "Eric's score is 12"
 *
 *
 * We can create a complex object to keep track
 * of all of the data about our player.
 *
 * Additionally, we could create an array of
 * players.
 *
 *    const players = [
 *      {
 *        name: 'Eric',
 *        rolls: [],
 *        score: 0,
 *        average: 0,
 *      },
 *      {
 *        name: 'Ryan',
 *        rolls: [],
 *        score: 0,
 *        average: 0,
 *      },
 *      {
 *        name: 'Casey',
 *        rolls: [],
 *        score: 0,
 *        average: 0,
 *      },
 *    ];
 */

// TODO: Create an object of all the players

// TODO: Loop over each player and roll the dice 20 times

// TODO: Loop over each player and display their results
