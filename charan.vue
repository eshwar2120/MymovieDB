<template>
 <v-container>
  <v-container>
  <v-text=field label="movie name" v-model="name"></v-text=field>
  <v-btn primary @click="getData()">Search</vbtn>
  </v-container>
  <v-container>
   <v-row>
   <v-card
   v-for="(m,i) in movies"
   :key = i 
  class = "mx-auto ma-4"
  max-width = "400"
 >
  <v-card-title>{{m.title}}</v-card-title>
  <v-card-text class="text--primary">
	<div>{{m.release_date}}</div>
  </v-card-text>
 </v-card>
 </v-row>
	</v-container>
 </v-container>
</template>

<script>
import axios from 'axios';
 export default{
  name: 'Helloworld',
  
  data: () => ({
	name: '',
	movies:[]
  }},
  methods:{
   async getData(){
   
	let moviedata = await axios.get("https://api.themoviedb.org/3/movie/550?api_key=48b0bf908c7b9bf3939b87f5b2b4be8d&query=${this.name}");
	this.movies = moviedata.data.results;
   }
  }
 }
</script> 