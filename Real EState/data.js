const properties = [
  // India Properties (7)
  {
    id: 1,
    title: "Luxury Apartment in Mumbai",
    location: "Mumbai",
    price: 75000,
    propertyType: "Apartment",
    images: [
      "https://admin.rustomjee.com/assets/uploads/project/project_logo/460X435/Banner.jpg",
      "https://www.micl.com/wp-content/uploads/2022/09/Why-to-invest-in-a-luxury-flat-in-Mumbai.jpg",
      "https://cfw51.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoidGFsYXRpYW5kcGFydG5lcnMuY29tIiwidiI6ODcyNzM4MzU5LCJyIjoxLCJpIjoiZmRlYmUxMjUtOTlmNC00MjRlLTYyNDAtZjI2ZmRhYzIyZTAwIn0/wp-content/uploads/2023/02/700x500-raheja-mobile-slider-1.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPU7nq1OWYmm8Dx9Ro38So0QR8r_e4R_cqL_pRA6aGvx5-De9xhTqsPQ&s"
    ],
    amenities: ["Wi-Fi", "Gym", "Security", "Parking"],
    address: "Bandra West, Mumbai, Maharashtra 400050"
  },
  {
    id: 2,
    title: "Modern House in Bangalore",
    location: "Bangalore",
    price: 95000,
    propertyType: "House",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThL89vl-iata6NHisXYpyBARMmmuBX4SAHrA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuIVqFhBJ_nYsWjcXx03KehjSkF7IAHHNhw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm_wvWE27HE_qc54fGzE3iozul5YlOdUqRmQ&s"
    ],
    amenities: ["Garden", "Garage", "Solar Panels"],
    address: "Whitefield, Bangalore, Karnataka 560066"
  },
  {
    id: 3,
    title: "Sea-Facing Villa in Goa",
    location: "Goa",
    price: 120000,
    propertyType: "House",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8GXZXpSa44gNDjP8xFKI1Fx4Xq48B69E17Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuX8bPYHHJZmrsVV-SVhFHte64fukpn6fnA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqSOl5YErL7bCuU4BBKW1Ci4NAoW0-pSYtGg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0wp5B29ekTNPI5IKcvo1IJ7PHEdTf1ZHFw&s"
    ],
    amenities: ["Pool", "Beach Access", "Barbecue"],
    address: "Calangute Beach Road, North Goa, Goa 403516"
  },
  {
    id: 4,
    title: "Budget Apartment in Delhi",
    location: "Delhi",
    price: 40000,
    propertyType: "Apartment",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRILD-S4DJ195I72ilhmLJ2r8dS900tskHvA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLR83McLRqWh7253zRgUU-xRbJqNOnJVYdFA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLR83McLRqWh7253zRgUU-xRbJqNOnJVYdFA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdxugCstEgv_z-fvLv21NZm6GSYaV_UQuDQ&s"
    ],
    amenities: ["Lift", "Security", "Power Backup"],
    address: "Dwarka Sector 10, New Delhi, Delhi 110075"
  },
  {
    id: 5,
    title: "3BHK Flat in Hyderabad",
    location: "Hyderabad",
    price: 65000,
    propertyType: "Apartment",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFlMsZBFayZS0h_8vmOJSGxq_VR35m21Anw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwppSZSinQn6B8sSvYnl_uoWo4IqXUBxclw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhRtqEoZURLF0wBv2PMBYesaa1Acu0iE93w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOSF7jrhBv6OqxTUMCtAMdItWEYjPMc_-9g&s"
    ],
    amenities: ["Gym", "Swimming Pool", "Children's Play Area"],
    address: "Gachibowli, Hyderabad, Telangana 500032"
  },
  {
    id: 6,
    title: "Family House in Chennai",
    location: "Chennai",
    price: 70000,
    propertyType: "House",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVBaq0SvaZ16UWKOQufWLHXn_9nzr40Zw6w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgANWb3C4To6afjKkdK7ghaX2kgXacgpjJaw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwVLQXcj_NoDVPF_1IlGSwr3ZDECWy5V63g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNQV-_ecuai8DmoJOJ267UqXyF8KJXcnjSvA&s"
    ],
    amenities: ["Parking", "Garden", "Storage"],
    address: "Anna Nagar, Chennai, Tamil Nadu 600040"
  },
  {
    id: 7,
    title: "Stylish Villa in Pune",
    location: "Pune",
    price: 85000,
    propertyType: "House",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbeA0c_PJ2fwoWZsXxaywqI35YLk84CBOjaAmJH7CCBYyjPVSX34rwgM&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTchgXvZ_LnJ_d--xSCge_AIbKjNb1duL4lRAQhJFnBq9RT0xm-qHFvj5E&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCHrRode27ZaMimqBY89clLLtdL7eyMFUrKQK76MrYsnU1UPQf2L-1c2FrQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL5IY9xR-LQLAi_jKigbHPJK-2Mub25KdJpgdU1ELemEQTNx-Wj5EZCiE&s"
    ],
    amenities: ["Private Garden", "Wi-Fi", "Smart Home"],
    address: "Koregaon Park, Pune, Maharashtra 411001"
  },
  // International Properties (5)
  {
    id: 8,
    title: "Penthouse Apartment in New York",
    location: "New York",
    price: 250000,
    propertyType: "Apartment",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyv-LHS5up4nRVzcBvsDlAUBJtUF4bysM5A&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5G5hDAUEBgocPXcBv6Hxa0G3c_aRXBfpKQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IcoZPDS3nxsN7T0xDxKkOXv4Z4i9sxmyig&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW839z-scQ-7FZ8R4bXbFaZvoYSpHwgBqQg&s"
    ],
    amenities: ["Doorman", "Elevator", "Fitness Center"],
    address: "Manhattan, New York, NY 10001, USA"
  },
  {
    id: 9,
    title: "Cozy Flat in London",
    location: "London",
    price: 200000,
    propertyType: "Flat",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREu0mTJQ5V-4QOG7F2AEBJ6ZaNV68jLbX5bw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBdn9wDi8Tj7gYtmqruHmQBkLS-75Rgp10Q&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1A_kAhHpXAG5uV7PJ-M_ykY6NDNLvl-Wig&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsrVZRV5oOzCUbOl99lTLDPPLO8fHaDLI7w&s"
    ],
    amenities: ["Central Heating", "Wifi", "Security"],
    address: "Camden Town, London NW1 8NH, UK"
  },
  {
    id: 10,
    title: "Beachside Villa in Sydney",
    location: "Sydney",
    price: 300000,
    propertyType: "Villa",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpVV5FzxSmkvkAiyso46QKSnrV93RoTHC9MOPRwQ2InfUkGHRI8ZIJKM&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuRplkPiEkC1YnQ9VrxU2fw7b3njUKOHBmPmpYFpnANIjRRNVnG1tnS5k&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCW6ymWEBQiTo2NBAgcuhong38KN32JCHfuSS8K2wL4YO5Ikzs7QYhNCY&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZyvac-qSa_yF32Ootm4gyafno5kraQh3GDak7AHeLQjzdUjShHr4HhHI&s"
    ],
    amenities: ["Pool", "Garden", "BBQ Area"],
    address: "Bondi Beach, Sydney NSW 2026, Australia"
  },
  {
    id: 11,
    title: "Modern House in Toronto",
    location: "Toronto",
    price: 180000,
    propertyType: "House",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXrbKMWDA9Hz9zhSXudJYFnnYhrY0ffaQHuQOed0fJk8KrUTdAkVTveo&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZRYmLUhNRtYW1IAMpQtBfdwnWt2n2sdRW0UioUalj7YQJ2HMF9fTDGY&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hwQLuRnhTv6d3DPtZooJHMc3T3lROMWKBXeG07B-lNdNMLIqJWfy9Xo&s",
      "https://st.hzcdn.com/fimgs/pictures/exteriors/toronto-design-modern-house-exterior-bananarch-design-studio-img~26a1ec110942feed_2561-1-07fa7d7-w320-h320-b1-p10.jpg"
    ],
    amenities: ["Garage", "Garden", "Fireplace"],
    address: "Downtown Toronto, ON M5V 2T6, Canada"
  },
  {
    id: 12,
    title: "Charming Flat in Berlin",
    location: "Berlin",
    price: 150000,
    propertyType: "Flat",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhRs8Eok72S933IgFhFfTwRL9qlTZZkgRineJIZEqeDpsuti5cRkViJ24&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW01ih9f2nTpeX2cfBynGoJxHPQyWaRS7L8rFShkewwLSjOxhwUxdQSFg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQhhK6YJjibIKgN1V4MUijxe_1P0Q4NWCrcebBP7wLpUB9pXK8T4viyA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWz8rSncWxtxfrwkW52LRAOwUEiF6TWCd61GW6Wec1RIJdqVCeDyLeY2I&s"
    ],
    amenities: ["Balcony", "Elevator", "Heating"],
    address: "Mitte, Berlin 10115, Germany"
  }
];