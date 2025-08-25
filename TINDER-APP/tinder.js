const users = [
  {
    profilePic: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayImg: "https://images.unsplash.com/photo-1589696709084-5d65d0343dd4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "USA, California",
    name: "Victoria",
    age: 22,
    bio: "Love music, sunsets, and adventure.",
    interests: ["music", "travel", "coffee"]
  },
  {
    profilePic: "https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayImg: "https://images.unsplash.com/photo-1571445556382-453d9e858ea9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "UK, London",
    name: "Sophia",
    age: 24,
    bio: "Exploring life, one city at a time.",
    interests: ["books", "art", "hiking"]
  },
  {
    profilePic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "India, Delhi",
    name: "Aarohi",
    age: 23,
    bio: "Foodie and tech enthusiast.",
    interests: ["coding", "gaming", "food"]
  },
  {
    profilePic: "https://images.unsplash.com/photo-1635098996189-6edad727a0f4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayImg: "https://images.unsplash.com/photo-1604436607823-d721dfe2df46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
    location: "India, Delhi",
    name: "Ruchika",
    age: 23,
    bio: "Foodie and tech enthusiast.",
    interests: ["coding", "gaming", "food"]
  }
];

let curr = 0;

function setData(user) {
  document.getElementById("mainImage").src = user.displayImg;
  document.getElementById("incomingImage").src = user.displayImg;
  document.getElementById("profilePic").src = user.profilePic;

  document.getElementById("location").textContent = user.location;
  document.getElementById("name").textContent = user.name;
  document.getElementById("age").textContent = user.age;
  document.getElementById("bio").textContent = user.bio;

  // tags
  let clutter = "";
  user.interests.forEach((interest) => {
    clutter += `
      <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        <i class="text-sm ri-music-2-fill"></i>
        <h3 class="text-sm tracking-tight capitalize">${interest}</h3>
      </div>`;
  });
  document.getElementById("tags").innerHTML = clutter;
}

function setInitial() {
  setData(users[curr]);
}
setInitial();
document.getElementById("denyBtn").addEventListener("click", function () {
  gsap.to(".maincard", {
    x: -200,
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      curr = (curr + 1) % users.length;
      setData(users[curr]);
      gsap.fromTo(
        ".maincard",
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      );
    }
  });
});
document.getElementById("acceptBtn").addEventListener("click", function () {
  gsap.to(".maincard", {
    x: 200,
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      curr = (curr + 1) % users.length;
      setData(users[curr]);
      gsap.fromTo(
        ".maincard",
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      );
    }
  });
});
