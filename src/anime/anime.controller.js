const AnimeModel = require("./anime.model");

const {
  sendSuccessResponse,
  sendSuccessfulCreationResponse,
  sendSuccessfulReadResponse,
  sendSuccessfulDeleteResponse,
  sendSuccessfulUpdateResponse,
} = require("../utils/successHundler");


exports.create = async (req, res) => {
  await AnimeModel.create(req.body);
  return sendSuccessfulCreationResponse(res) ;
};

exports.delete = async (req, res) => {
  const deleted = await AnimeModel.deleteOne({ uid: req.body.uid });
  if (deleted.deletedCount != 0) return sendSuccessfulDeleteResponse(res) ;
  else throw new Error('NOT_FOUND');

};

exports.update = async (req, res) => {
  const updateResult = await AnimeModel.updateOne(
    { uid: req.body.uid },
    req.body
  );
  if (updateResult.modifiedCount === 0) {
    throw new Error('NOT_FOUND')
  }
  return sendSuccessfulUpdateResponse(res); 
};






exports.read = async (req, res) => {
  const anime = await AnimeModel.findOne({ uid: req.params.uid }).populate('reviews');
  console.log(anime);
  if (!anime) {
      throw new Error('NOT_FOUND') 
  }
  return sendSuccessfulReadResponse(res,anime); 
};

exports.readAllByUid = async (req, res) => {
  const animeList = await AnimeModel["animes"].find({ uid: req.params.uid });

 
  if (animeList.length === 0) throw new Error('NOT_FOUND') 


  return sendSuccessfulReadResponse(res,animeList); 
};










exports.readAll = async (req, res) => {
  

  const anime = await AnimeModel.find().skip(req.params.fromAnimeNumber).limit(req.params.toAnimeNumber);
  
  return res.status(200).json(anime);

};

exports.countAnimes = async (req, res) => {
  
  const count = await AnimeModel.countDocuments({});

  return res.status(200).json(count);

};

