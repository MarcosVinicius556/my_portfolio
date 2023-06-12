import './page-footer.css'

function PageFooter() {
  return (
    <>
       <footer>
		<a name="footer"></a>
		<div className="social" id="section-social">
			<ul>
				<div></div>
                <li>
					<a href="https://www.linkedin.com/in/marcos-vinicius-angeli-costa/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin" />
					</a>
				</li>
				<li>	
					<a href="https://contate.me/dev_marcos_vinicius" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-whatsapp" />
					</a>
				</li>
				<li>	
					<a href="https://github.com/MarcosVinicius556" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github" />
					</a>
				</li>
				<div></div>
			</ul>
		</div>
		<p className="end">Copyright by Marcos Vinicius Angeli Costa.</p>
	</footer>
    </>
  )
}

export default PageFooter