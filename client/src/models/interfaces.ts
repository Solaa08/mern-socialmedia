export default interface UserModel {
    _id: number,
    firstName: string,
    lastName: string,
    email: string,
    picturePath: string,
    friends: [],
    location: string,
    occupation: string,
    viewedProfile: number,
    impressions: number,
    createdAt: number,
    updatedAt: number,
}