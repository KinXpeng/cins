<template>
	<div id="blog">
		<!-- 博客介绍 -->
		<div class="info">
			<!-- <div class="logo">
<img src="../assets/images/treble.png" alt="">
</div> -->
			<div class="text">
				<!-- <div class="text-study"><span class="c">“</span>倾倾倾风<span class="c">”</span>是我个人<span class="a">博客</span>，用来将自己所学遇到的一些问题以及解决方法<span class="b">记录</span>下来，来提升和完善自己的<span class="c">专业</span>知识。</div> -->
				<div class="text-study"><span class="c">Hello,</span> I'm KinXpeng!</div>
				<div class="text-study"><span class="b">Here!</span></div>
				<div class="text-live">You will <span class="d">see more...</span></div>
				<!-- <div class="text-live">喜欢生活，将学习与生活<span class="d">结合</span>起来，把好的文章也会拿出来分享，让<span class="e">自学</span>的生活充满精彩！</div> -->
			</div>
			<div class="blog">
				<div class="blog_btn">
					<a href="https://blog.cins.cc/" target="_blank">浏览博客<i class="el-icon-arrow-right"></i></a>
				</div>
			</div>
		</div>
		<!-- 博客展示 -->
		<div class="intro">
			<div class="intro-blog" style="margin-left:0;">
				<div class="intro-img">
					<img src="../assets/images/blog1.png" alt="" />
				</div>
			</div>
			<div class="intro-blog trans2">
				<div class="intro-img">
					<img src="../assets/images/blog2.png" alt="" />
				</div>
			</div>
			<div class="intro-blog trans3">
				<div class="intro-img">
					<img src="../assets/images/blog3.png" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		mounted() {
			// let cWidth=document.body.clientWidth;
			// if(cWidth > 920){
			//   console.log(this)
			// }
		}
	}
</script>

<style lang="less">
	#blog {
		color: #fff;
		background-image: linear-gradient(to right bottom, #000 25%, #480048);
		padding-bottom: 60px;
		overflow: hidden;
		// font-weight: 300;
		-webkit-text-rendering: optimizeLegibility;
		-moz-text-rendering: optimizeLegibility;
		text-rendering: optimizeLegibility;
		// 博客介绍
		.info {
			width: 70%;
			height: auto;
			padding: 10px 15% 30px;
			font-size: 28px;
			// .logo{
			//   width:153px;
			//   height:60px;
			//   img{
			//     width:153px;
			//     height:60px;
			//   }
			// }
			.text {
				width: 100%;
				height: auto;
				min-height: 190px;
				font-weight: 300;
				font-size: 40px;
				text-align: center;
				span {
					color: transparent;
					background-clip: text;
				}
				.text-study {
					margin: 10px 0 20px;
					span.a {
						background-image: linear-gradient(to right, #24c6dc, #514a9d);
					}
					span.b {
						background-image: linear-gradient(to right, #dd5e89, #f7bb97);
					}
					span.c {
						background-image: linear-gradient(to right, #f3cd13, #f35858);
					}
				}
				.text-live {
					span.d {
						background-image: linear-gradient(to right, #4cb8c4, #3cd3ad);
					}
					span.e {
						background-image: linear-gradient(to right, #4776e6, #8e54e9);
					}
				}
			}
			.blog {
				width: 100%;
				text-align: center;
			}
			.blog_btn {
				width: 170px;
				// width:24%;
				// margin:0 38%;
				height: 50px;
				margin: 20px auto 0;
				text-align: center;
				line-height: 50px;
				background-image: linear-gradient(to right, #c04848 0%, #480048);
				transition: 0.5s;
				font-weight: 300;
				a {
					color: #fff;
				}
			}
			.blog_btn:hover {
				box-shadow: 0 6px 90px 0 #c04848, 0 8px 60px 0 #480048;
				transform: scale(1.02);
			}
		}
		// 博客展示
		.intro {
			position: relative;
			width: 80%;
			height: 530px;
			margin: 0 20%;
			perspective: 3000px;
			.intro-blog {
				position: absolute;
				width: 80%;
				min-width: 500px;
				max-width: 600px;
				height: 100%;
				// border:1px solid #fff;
				border-radius: 4px;
				background: #fff;
				transform: rotate(18deg) rotateX(55deg);
				box-shadow: 20px 20px 40px #000;
				z-index: 2;
				.intro-img {
					width: 90%;
					height: 80%;
					margin: 8% 5%;
					box-shadow: 6px 6px 6px #999;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
			.intro-blog.trans2 {
				top: 80px;
				left: 40px;
				z-index: 1;
			}
			.intro-blog.trans3 {
				top: 160px;
				left: 80px;
				z-index: 0;
			}
		}

		@media (max-width: 500px) {
			.info {
				font-size: 16px;
				.blog_btn {
					width: 100px;
					height: 30px;
					margin-top: 20px;
					text-align: center;
					line-height: 30px;
					font-weight: 300;
				}
			}
			.intro {
				position: relative;
				width: 80%;
				height: 230px;
				margin: 0 10%;
				perspective: 3000px;
				.intro-blog {
					position: absolute;
					width: 80%;
					min-width: unset;
					max-width: 300px;
					height: 100%;
					// border:1px solid #fff;
					border-radius: 4px;
					background: #fff;
					transform: rotate(18deg) rotateX(55deg);
					box-shadow: 20px 20px 40px #000;
					z-index: 2;
					.intro-img {
						width: 90%;
						height: 80%;
						margin: 8% 5%;
						box-shadow: 6px 6px 6px #999;
						img {
							width: 100%;
							height: 100%;
						}
					}
				}
				.intro-blog.trans2 {
					top: 40px;
					left: 20px;
					z-index: 1;
				}
				.intro-blog.trans3 {
					top: 80px;
					left: 40px;
					z-index: 0;
				}
			}
		}
	}
</style>
