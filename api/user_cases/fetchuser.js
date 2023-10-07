


function fetchUsers(User, currentUserId, res, req) {

    const likes = []


    //not efficient fetcing algorithm but will be improves
    //geospartial fetching is remaining part of the puzzle
    const fetchUserWithMutualHobbies =
        User.find({
            $and: [
                { "interest": { $in: likes } },
                {
                    "disLikedIds": {
                        $not: {
                            $in: [currentUserId]
                        }
                    }
                },
                {
                    "likedByIds": {
                        $not: {
                            $in: [currentUserId]
                        }
                    }
                },
                { "gender": "Female" }, { "age": { $lte: 20, $gte: 18 } }]
        });

    fetchUserWithMutualHobbies.sort({ elo: -1 })
        .then(results => {
            if (results.length != 0) {
                res.status(200).json({ "message": results })
            } else {

                User.find({
                    $and: [

                        {
                            "disLikedIds": {
                                $not: {
                                    $in: [currentUserId]
                                }
                            }
                        },
                        {
                            "likedByIds": {
                                $not: {
                                    $in: [currentUserId]
                                }
                            }
                        },
                        { "gender": "Female" }, { "age": { $lte: 20, $gte: 18 } }]
                }).sort({ elo: -1 }).then((results) => {
                    res.status(200).json({ "message": results })
                });
            }
        })
        .catch(err => res.status(500).json({ "error": err }))
}

module.exports = { fetchUsers }